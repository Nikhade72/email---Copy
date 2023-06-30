const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Enter your emailid',
        pass: 'Enter your password'
    }
});

let mailDetails = {
    from : 'sender emailid',
    to: 'receiver emailid',
    subject: 'Test mail',
    html: '<p> Node.js testing mail for assignment <p>'

};

mailTransporter.sendMail(mailDetails, function(err, data){
    if(err) {
        console.log('error occures'); 
    } else {
        console.log('email sent successfully');
    }
})