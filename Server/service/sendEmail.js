var nodemailer = require('nodemailer');

exports.sendEmail = function(mail){
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'habutique.foru@gmail.com',
        pass: 'habutique'
    }
    });

    var mailOptions = {
    from: 'habutique.foru@gmail.com',
    to: mail.to,
    subject: 'הבוטיק - אישור הזמנה',
    html:`<h2>היי ${mail.name}</h2>
    <h2>אנחנו מודים לך על הזמנתך באתר הבוטיק - איפור וטיפוח</h2>
    
    <h4>נשמח לענות על כל שאלה במייל habutique.forU@gmail.com</h4>
    <h3>תתחדשי!!</h3>`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}
