var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    var ipAddress = req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'];
    var clientOs = req.headers['user-agent'];
    var data = {
        "ipaddress": ipAddress,
        "language" : language,
        "software":clientOs
    }
    res.end(JSON.stringify(data));
});

module.exports = router;
