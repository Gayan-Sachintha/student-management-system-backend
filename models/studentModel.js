const db = require('../config/db');

const Student = {
  getAll: (callback) => {
    const query = 'SELECT * FROM students';
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO students SET ?';
    db.query(query, data, callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE students SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Student;
