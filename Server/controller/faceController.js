var Face = require("../models/faces")

exports.getFace = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    try {
        debugger
        Face.find()
            .exec(function (err, list) {
                res.send(list)
            })
    } catch {
        if (err) return next(err);
        res.send(list);
    }
}
