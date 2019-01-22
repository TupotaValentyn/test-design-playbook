const Mailgun = require('mailgun-js');

const API_KEY = '905b6d8793aa95dae52d5c62e5931962-2d27312c-d3893eba';
const DOMAIN = 'sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';
const FROM_WHO = 'postmaster@sandboxb98f54e9299c4c9cb51f00c87e5c4804.mailgun.org';

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
};
module.exports.sendMail = sendMail;

function mailTemplate(title, text) {
    return `<html>
    <head>
        <style>
            body {
                background-color: #fcfcfc;
            }
            
            img {
                width: 80%;
                padding: 0 38px;
                margin: 0px auto;
            }
            
            div {
                background-color: #fff;
                width: 460px;
                border: 1px solid #f3f3f3;
                border-radius: 3px;
                margin: 10px auto;
                padding: 10px;
            }
            
            .mail {
                font-size: 18px;
                font-family: Arial;
                color: black;
            }
            
            .mail_welcome_user {
                font-weight: 600;
            }
            
            .button_start_test {
                color: #007acc;
            }
            
            .mail_error_send {
                font-size: 12px;
                color: gray;
            }
            
            .button_cansel_test {
                color: #ff3333;
            }
            
            a {
                text-decoration: none;
            }
        </style>
    </head>

    <body>
        <div class="mail"><img src="https://i.ibb.co/hYtzT1v/logo.png" />
            <p class="mail_welcome_user">${ title }</p>
            <p>${ text }</p>
            <p class="mail_error_send">Дане повідомлення є конфіденційним. Якщо Ви отримали його помилково проігноруйте. Якщо Ви отримали його знову, напишіть нам на example@email.com.</p>
        </div>
    </body>

    </html>`;
};

module.exports.invite = (user, link) => {
    return sendMail(user.email, 'Invite link.', mailTemplate(`Привіт, ${ user.surname } ${ user.name }. `, `Наша команда запрошує Вас пройти тестове завдання для можливості влаштуватися на роботу.
            Для продовження перейдіть за <a class="button_start_test" href="${ link }">посиланням</a>.`))
};
module.exports.testCompleted = (user) => {
    return sendMail(user.email, 'Test completed.', mailTemplate('', `Кандидат ${user.surname} ${user.name}, завершив тестування. Результати можна переглянути на нашому сайті.`))
};