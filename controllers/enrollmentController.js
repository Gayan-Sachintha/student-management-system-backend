const Enrollment = require('../models/enrollmentModel');

exports.enrollStudent = (req, res) => {
  const data = req.body;
  Enrollment.enroll(data, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
};

exports.getEnrollments = (req, res) => {
  Enrollment.getAllEnrollments((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};
