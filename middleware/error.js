const logger = require("../startup/logger");

module.exports = function(err, req, res, next) {
    //logging
    logger.error(err.message, err);
    res.status(500).send("hata olustu");
};