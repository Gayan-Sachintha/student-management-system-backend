const db = require('../config/db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO users SET ?';
    db.query(query, data, callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE users SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = User;
