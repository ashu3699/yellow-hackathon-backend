const router = require('express').Router();

const sw = require('./sw');

router.get('/expenses', (req, res) => {
    sw.getExpenses().then(expenses => {
        res.json(expenses);
    });
})

router.get('/me', (req, res) => {
    sw.getCurrentUser().then(user => {
        res.json(user);
    });
})


module.exports = router;