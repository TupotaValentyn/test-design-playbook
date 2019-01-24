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
    let template = fs.readFileSync('./main-template.html', 'UTF-8');
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
            `Привіт, ${ user.surname } ${ user.name }. `,
            `Наша команда запрошує Вас пройти тестове завдання. Для продовження перейдіть за <a class="button_start_test" href="${ link }">посиланням</a>.`
        )
    )
};

module.exports.testCompleted = (user) => {
    return sendMail(
        user.email,
        'Test completed.',
        mailTemplate(
            '',
            `Кандидат ${user.surname} ${user.name}, завершив тестування. Результати можна переглянути на нашому сайті.`
        )
    )
};
