var config = require('../../../config/config');

exports.indexResopnse = function (req, res) {
    res.status(200).send({
        messsage: 'Gobbly Server running at http://' + config.HOST + ':' + config.PORT,
        status: 'up',
        success: true
    });
}
