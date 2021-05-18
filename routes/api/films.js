const express = require('express');
const router = express.Router();
const Film = require('../../models/Film');

router.get('/test', (req, res) => {
    res.send(`Testing film route`);
})

router.get('/', async (req, res) => {
    Film.find({})
        .then(films => res.json(films))
        .catch(err => res.status(404).json({err}));
});

router.post('/add', async (req, res) => {
    try {
        const film = await new Film(req.body).save()
        res.status(200).json({msg: 'Film added successfully', film})
    }
    catch (err) {
        res.status(500).json({msg: 'Unable to add film', err})
    }
})

module.exports = router;