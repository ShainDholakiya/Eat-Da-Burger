const express = require('express');
const router = express.Router();

const orm = require('../config/orm');

router.get("/", function (req, res) {
    orm.selectAllBy('devoured', false, function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Not able to query the database"
            });
        }

        res.render('index', { burgers, style: 'index' });
    });
});

router.get('/all', (req, res) => {
    orm.selectAll(function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Not able to query the database"
            });
        }

        res.render('allBurgers', { burgers, style: 'all' });
    });
});

router.get('/devoured', (req, res) => {
    orm.selectAllBy('devoured', true, function (error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Not able to query the database by devoured"
            });
        }

        res.render('devoured', { burgers, style: 'devour' });
    });
});

router.post('/add', (req, res) => {

    const burgerName = req.body.burger_name;
    const devoured = req.body.devoured;

    orm.insertOne(burgerName, function (error, burger) {
        if (error) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }

        return res.json({
            burger_name: burgerName,
            id: burger.insertId,
            devoured: 0
        });
    });

});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    orm.deleteOne(id, function (err, burger) {
        if (err) {
            return res.status(501).json({
                message: "Not able to delete a burger"
            });
        }

        return res.json({
            id
        });
    });

});

router.put('/:id/:value', (req, res) => {
    const id = req.params.id;
    const condition = JSON.parse(req.params.value);

    orm.updateOne(condition, id, function(err, burger) {
        if (err) {
            return res.status(501).json({
                message: "Not able to add a burger to your devoured list"
            });
        }

        return res.json({
            id: id
        });
    });
});

module.exports = router;