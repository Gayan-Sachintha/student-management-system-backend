const db = require('../config/db');

const Enrollment = {
  enroll: (data, callback) => {
    const query = 'INSERT INTO enrollments SET ?';
    db.query(query, data, callback);
  },
  getAllEnrollments: (callback) => {
    const query = `
      SELECT students.name as student_name, courses.course_name 
      FROM enrollments
      JOIN students ON enrollments.student_id = students.id
      JOIN courses ON enrollments.course_id = courses.id
    `;
    db.query(query, callback);
  },
};

module.exports = Enrollment;
