var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
    res.render('unit-test', { title: 'unit-test' });
});

function Logger() {
    return {
        log: function(req) {
            console.log('query:', req.query);
            console.log('body:', req.body);
        }
    };
}

router.get('/me', function(req, res, next) {
    Logger().log(req);

    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: [{
            username: 'dhuang01.oth',
            age: '28',
            sex: '男',
            job: 'IT'
        }]
    });
});

router.post('/me/update', function(req, res, next) {
    Logger().log(req);

    res.json({
        success: true,
        erroCode: null,
        message: null,
        data: [{
            username: 'dhuang01.oth',
            age: req.body.age || '',
            sex: '男',
            job: req.body.job || ''
        }]
    });
});

module.exports = router;
