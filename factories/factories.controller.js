const express = require('express');
const router = express.Router();
// const authorize = require('_middleware/authorize');
const factoriesService = require('./factories.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
    factoriesService.getAll()
        .then(sources => res.json(sources))
        .catch(next);
}

function getById(req, res, next) {
    factoriesService.getById(req.params.id)
        .then(source => res.json(source))
        .catch(next);
}
