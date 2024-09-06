const Student = require('../models/studentModel');

exports.getStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const data = req.body;
  Student.create(data, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ id: result.insertId, ...data });
  });
};

exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Student.update(id, data, (err) => {
    if (err) res.status(500).send(err);
    res.json({ id, ...data });
  });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  Student.delete(id, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Student deleted' });
  });
};
