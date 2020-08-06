const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.body)

    res.status(200).json({
        message: 'Handling GET requests to /samples'
    });
});

router.post('/', (req, res, next) => {
    const sample = {
        name: req.body.name,
        price: req.body.price
    };
    console.log(req.body)
    res.status(201).json({
        message: 'Handling POST requests to /samples',
        sample: {
            name: "Sandro"
        }
    });
});

router.get('/:sampleId', (req, res, next) => {
    const id = req.params.sampleId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:sampleId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated sample!'
    });
});

router.delete('/:sampleId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted sample!'
    });
});

module.exports = router;