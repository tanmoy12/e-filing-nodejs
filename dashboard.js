/**
 * Created by razon on 8/14/16.
 */

// initial declaraization
var express = require('express');
var router = express.Router();


// exporting the module to the outer world
module.exports = router;

// routing to the dashboard
router.route('/')
    .get(function (req, res) {
        res.render('dashboard');
    })
    .post(function (req, res) {
        console.log(req.body);
        console.log(req.user);
        res.sendStatus(200);
    });
