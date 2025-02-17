exports.on = function(app) {

    let path = require('path');
    let preWebPath = path.join(__dirname, '../client','views');

    app.get('/', function(req, res) {
        res.sendfile(path.join(preWebPath, 'pop.html'));
    });

}
