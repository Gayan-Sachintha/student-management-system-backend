const Course = require('../models/courseModel');

exports.getCourses = (req, res) => {
  Course.getAll((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

exports.createCourse = (req, res) => {
  const data = req.body;
  Course.create(data, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
};

exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Course.update(id, data, (err) => {
    if (err) res.status(500).send(err);
    res.json({ id, ...data });
  });
};

exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  Course.delete(id, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Course deleted' });
  });
};
