const Mailgun = require('mailgun-js');
const fs = require('fs');

const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const FROM_WHO = process.env.FROM_WHO;

function sendMail(email, subject, text) {
    const mailgun = new Mailgun({apiKey: API_KEY, domain: DOMAIN});
    const data = {
        from: FROM_WHO,
        to: email,
        subject: subject,
        html: text
    };
    mailgun.messages().send(data, (error, body) => {
        if (error) {
            throw error;
        } else {
            return body;
        }
    });
}

function mailTemplate(title, text) {
    let template = fs.readFileSync(__dirname + '/mail-template.html', 'UTF-8');
    return template
      .replace('$[title]', title)
      .replace('$[text]', text);
}

module.exports.sendMail = sendMail;

module.exports.invite = (user, link) => {
    return sendMail(
        user.email,
        'Invite link.',
        mailTemplate(
            `Hello, ${ user.surname } ${ user.first_name }. `,
            `Our team invites you to pass the test. In order to continue you need to follow the <a class="button_start_test" href="${ link }">link</a>.`
        )
    )
};

module.exports.testCompleted = (user) => {
    return sendMail(
        user.email,
        'Test completed.',
        mailTemplate(
            '',
            `Candidate ${user.surname} ${user.name} passed the test. Results are available on our website.`
        )
    )
};
