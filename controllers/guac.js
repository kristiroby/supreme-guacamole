const express = require('express');
const router = express.Router();
const Guac = require('../models/guac.js');

router.get('/', (req, res) => {
  Guac.find({}, (error, foundGuac) => {
    res.json(foundGuac);
  });
});

router.delete('/:id', (req, res) => {
  Guac.findByIdAndRemove(req.params.id, (error, deletedGuac) => {
    res.json(deletedGuac);
  });
});

router.put('/:id', (req, res) => {
  Guac.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedGuac) => {
    res.json(updatedGuac);
  });
});

router.post('/', (req, res) => {
  Guac.create(req.body, (error, createdGuac) => {
    res.json(createdGuac);
  })
})

module.exports = router;
