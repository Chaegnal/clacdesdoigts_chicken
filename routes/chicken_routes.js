    const express = require('express');
    const chicken = require('../routes/chicken');

    const router = express.Router();
    router.post('/', chicken.createChicken);
    router.get('/', chicken.getChickens);
    router.delete('/:id', chicken.deleteChicken);
    router.put('/:id', chicken.updateChicken);
    router.patch('/:id', chicken.partialUpdateChicken);

    module.exports = router;
