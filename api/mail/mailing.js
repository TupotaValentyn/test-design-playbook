const Mailgun = require('mailgun-js');

const API_KEY = '905b6d8793aa95dae52d5c62e5931962-2d27312c-d3893eba';
const DOMAIN = 'sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';
const FROM_WHO = 'postmaster@sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';//'test-design-playbook@protonmail.com';

module.exports = function (email, subject, text) {
    const mailgun = new Mailgun({apiKey: API_KEY, domain: DOMAIN});
    const data = {
        from: FROM_WHO,
        to: email,
        subject: subject,
        text: text
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            throw error ;
        } else {
            return body;
        }
      });
};