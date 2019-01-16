const nodemailer = require('nodemailer');
const vars = require('../config');

module.exports = function (output) {
    return nodemailer.createTestAccount((err, account) => {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: vars.mailer.username,
                pass: vars.mailer.password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let mailOptions = {
            from: '"Portfolio Website" <no-reply@david-redmond.com>',
            to: vars.mailer.reciepient,
            subject: `* NEW message from david-redmond.com`,
            text: 'Hello world?',
            html: output
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            }
        });
    });
};
