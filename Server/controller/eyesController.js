var Eyes = require("../models/eyes")

exports.getEyes = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try {
        Eyes.find()
            .exec(function (err, list) {
                res.send(list)
            })
    } catch {
        if (err) return next(err);
        res.send(list);
    }
}
