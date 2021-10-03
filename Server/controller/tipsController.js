var Tips = require("../models/tips")

exports.getTips = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try {
        Tips.find()
            .exec(function (err, list) {
                res.send(list)
            })
    } catch {
        if (err) return next(err);
        res.send(list);
    }
}
