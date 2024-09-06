const db = require('../config/db');

const Course = {
  getAll: (callback) => {
    const query = 'SELECT * FROM courses';
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO courses SET ?';
    db.query(query, data, callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE courses SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM courses WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Course;
