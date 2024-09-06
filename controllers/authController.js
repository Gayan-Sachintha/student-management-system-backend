const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  
  const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserQuery, [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) return res.status(400).send('User already exists');

    const hashedPassword = bcrypt.hashSync(password, 8);

    const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(insertUserQuery, [name, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, email });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const getUserQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(getUserQuery, [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) return res.status(401).send('Invalid credentials');

    const token = jwt.sign({ id: user.id, email: user.email }, 'secret', { expiresIn: '1h' });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('No token provided');

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token');
    req.userId = decoded.id;
    next();
  });
};
