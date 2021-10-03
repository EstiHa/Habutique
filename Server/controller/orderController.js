const { getMaxListeners } = require("../models/order");
var Order = require("../models/order")
var sendEmail = require("../service/sendEmail")

exports.postOrder = function (req, res, next) {
    debugger
  
    // console.log("hi")
    //console.log(req.body[1])
    // console.log(req.body)
    // console.log(req.body[2])
    // console.log(req.body[1])

//    console.log(req.body[3])

    // console.log(req)

    var newOrder = new Order({
        cart:[{
            productId:req.body.productId,
            name: req.body.name,
            company: req.body.company,
            link: req.body.link,
            cost: req.body.cost
        }],
        account:
        {
            email: req.body[2].account.email,
            password: req.body[2].account.password,
            password2:req.body[2].account.password2
        },
        user: 
        {
            firstName: req.body[1].user.firstName,
            lastName: req.body[1].user.lastName,
            contactNo: req.body[1].user.contactNo,
            address:req.body[1].user.address
        },
        payment:
        {
            ownerName: req.body[3].payment.ownNumber,
            cardNumber:req.body[3].payment.cardNumber,
            month: req.body[3].payment.month,
            month: req.body[3].payment.month,
            year: req.body[3].payment.year,
            cvc:req.body[3].payment.cvc
        },
    });

    newOrder.save(function (err) {
        if (err) return next(err);
        res.send(newOrder);
    })
}

exports.email= function(req, res){

    var mail = {
      to: req.body[2].account.email,
      name: req.body[1].user.firstName+" "+req.body[1].user.lastName
    }
  
    sendEmail.sendEmail(mail)
}