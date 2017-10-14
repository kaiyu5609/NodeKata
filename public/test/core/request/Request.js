define(function(require, exports, module) {

    var Request = require('k-chart/core/request/Request');

    Request({
        url: '/me?username=dhuang01.oth'
    }).get().then(function(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    });

    Request({
        url: '/me/update',
        data: {
            age: '27',
            job: 'Manager'
        }
    }).post().then(function(res) {
        console.log(res);
    }, function(err) {
        console.log(err);
    });


});
