const express = require('express');
const router = express.Router();
// const authorize = require('_middleware/authorize');
const providersService = require('./providers.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
    providersService.getAll()
        .then(providers => res.json(providers))
        .catch(next);
}

function getById(req, res, next) {
    providersService.getById(req.params.id)
        .then(provider => res.json(provider))
        .catch(next);
}
