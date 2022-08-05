const router = require('express').Router();
const { User } = require('../models');

router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
  .then((dbUserData) => res.json(dbUserData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'User not found' });
    } res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  User.update( req.body, {
    where: {
      id: req.params.id
    },
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'User not found' });
    } res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.delete('/:id', (req, res) => {
  User.destory({
    where: {
      id: req.params.id
    },
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'User not found' });
    } res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;