const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.getAll((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

exports.createUser = (req, res) => {
  const data = req.body;
  User.create(data, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  User.update(id, data, (err) => {
    if (err) res.status(500).send(err);
    res.json({ id, ...data });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'User deleted' });
  });
};
