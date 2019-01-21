var Mailgun = require('mailgun-js');

var api_key = '905b6d8793aa95dae52d5c62e5931962-2d27312c-d3893eba';
var domain = 'sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';
var from_who = 'postmaster@sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';//'test-design-playbook@protonmail.com';

function sendMail (email, subject, text){
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});
    var data = {
        from: from_who,
        to: email,
        subject: subject,
        text: text
    };
    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log("Not sending mail. ", error);
        } else {
            console.log(body);
        }
      });
}

module.exports = sendMail;