const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const queries = require('../queries/queries');

router.get("/", (request, response, next) => {
    queries.list().then(garden => {
        response.json({garden});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(garden => {
        garden
            ? response.json({garden})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(garden => {
        response.status(201).json({garden});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(garden => {
        response.json({garden});
    }).catch(next);
});

module.exports = router;