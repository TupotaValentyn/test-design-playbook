const { sendMail, invite, testCompleted } = require('./mailing');


// user.email = 'kvsochka@gmail.com';
//sendMail('kvsochka@gmail.com', 'Тема розмови', 'Текст повідомлення')
// sendMail('Email', 'Тема розмови', 'Текст повідомлення');

const User = require('../models/user');
user = new User({
    surname: 'Kopachev',
    name: 'Vadim',
    second_name: '2name',
    email: 'kvsochka@gmail.com',
    token: 'token'
})
invite(user, 'newTest1.com');

testCompleted(user);