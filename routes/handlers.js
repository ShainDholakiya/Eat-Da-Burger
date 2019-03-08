const express = require('express');
const router = express.Router();

const orm = require('../config/orm');

router.get("/", function (req, res) {
    orm.selectAll(function(error, burgers) {
        if (error) {
            return res.status(501).json({
                message: "Not able to query the database"
            });
        }
        
        res.render('index', { burgers , style: 'index'});
    });
});

router.post('/add', (req,res) => {

    const burgerName = req.body.burger_name;

    orm.insertOne(burgerName, function(error, burger) {
        if (error) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }

        console.log(res.json());

        return res.json({
            burger_name: burgerName,
            id: burger.insertId,
            devoured: 0
        });
    });

});

module.exports = router;