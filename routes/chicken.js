const connection = require('../config');

exports.createChicken = (req, res) => {
  const name = req.body.name;
  const birthday = req.body.birthday;
  const weight = req.body.weight;
  const steps = req.body.steps || 0;
  const running = req.body.isRunning || 0;

  connection.query(
    'INSERT INTO chicken (name, birthday, weight, steps, isRunning) VALUES (?, ?, ?, ?, ?)',
    [name, birthday, weight, steps, running],
    (error, result) => {
      if (error) {
        console.error('Error creating a new chicken:', error);
        res.status(500).json({ msg: 'Could not create a new chicken' });
      } else {
        console.log('New chicken created successfully');
        res.status(201).json({ id: result.insertId });
      }
    }
  );
};

exports.getChickens = (req, res) => {
  connection.query('SELECT * FROM chicken', (error, result) => {
    if (error) {
      res.status(500).json({ msg: 'Could not retrieve chickens' });
    } else {
      res.status(200).json(result);
    }
  });
};

exports.deleteChicken = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM chicken WHERE id = ?', [id], (error, result) => {
    if (error) {
      res.status(500).json({ msg: 'Could not delete chicken' });
    } else {
      if (result.affectedRows == 0) {
        res.status(404).json({ msg: 'Could not find the chicken to delete' });
      } else {
        res.status(200).json({ msg: 'The chicken was deleted successfully' });
      }
    }
  });
};

exports.updateChicken = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const birthday = req.body.birthday;
  const weight = req.body.weight;
  const steps = req.body.steps || 0;
  const running = req.body.isRunning || 0;

  connection.query(
    'UPDATE chicken SET name = ?, birthday = ?, weight = ?, steps = ?, isRunning = ? WHERE id = ?',
    [name, birthday, weight, steps, running, id],
    (error, result) => {
      if (error) {
        res.status(500).json({ msg: "Could not update all the chicken's information" });
      } else {
        if (result.affectedRows == 0) {
          res.status(404).json({ msg: 'Could not find the chicken to update' });
        } else {
          res.status(200).json({ msg: 'The chicken was updated successfully' });
        }
      }
    }
  );
};

exports.partialUpdateChicken = (req, res) => {
  const id = req.params.id;
  const updates = {};

  if (req.body.name) {
    updates.name = req.body.name;
  }
  if (req.body.birthday) {
    updates.birthday = req.body.birthday;
  }
  if (req.body.weight) {
    updates.weight = req.body.weight;
  }
  if (req.body.steps !== undefined) {
    updates.steps = req.body.steps;
  }
  if (req.body.isRunning !== undefined) {
    updates.isRunning = req.body.isRunning;
  }

  connection.query('UPDATE chicken SET ? WHERE id = ?', [updates, id], (error, result) => {
    if (error) {
      res.status(500).json({ msg: "Could not update the chicken's information" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ msg: 'Could not find the chicken to update' });
      } else {
        res.status(200).json({ msg: 'The chicken was updated successfully' });
      }
    }
  });
};
