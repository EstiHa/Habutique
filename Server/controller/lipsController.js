var Lips = require("../models/lipstics")

exports.getLips = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try {
        Lips.find()
            .exec(function (err, list) {
                res.send(list)
            })
    } catch {
        if (err) return next(err);
        res.send(list);
    }
}
