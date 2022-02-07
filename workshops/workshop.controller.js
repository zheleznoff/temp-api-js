const express = require('express');
const router = express.Router();
const authorize = require('_middleware/authorize');
const workshopService = require('./workshop.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
    workshopService.getAll()
        .then(sources => res.json(sources))
        .catch(next);
}

function getById(req, res, next) {
    workshopService.getById(req.params.id)
        .then(source => res.json(source))
        .catch(next);
}
