exports.on = function(app) {
    let preRestApi = '/server';
    let config = require('../config').config;
    let count = 0;
    app.get(preRestApi + '/isExist', function(req, res) {
        let response = {
            'resStatus': 0,
            'resString': ''
        }
        res.send(JSON.stringify(response));
    });
}
