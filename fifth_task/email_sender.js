const nodemailer = require("nodemailer");

// create reusable transporter object using Gmail
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ilyasseinsceco@gmail.com",      // replace with your email
        pass: "Ilyasse@2006"          // replace with your Gmail App Password
    }
});

// setup email data
let mailOptions = {
    from: "ilyasseinsceco@gmail.com",         // sender address
    to: "ilyasseinsceco@gmail.com",           // receiver address (can be yourself)
    subject: "Test Email from Node.js",   // Subject line
    text: "Hello! This is a test email sent from Node.js" // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log("Message sent: " + info.response);
});
