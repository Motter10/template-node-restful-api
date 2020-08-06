const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /users
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'users were fetched'
    });
});

router.post('/', (req, res, next) => {

    console.log(req.body);

    res.status(201).json({
        message: `user '${req.body.name}' was created`
    });
});

router.get('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'user details',
        userId: req.params.userId
    });
});

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        message: 'user deleted',
        userId: req.params.userId
    });
});

module.exports = router;