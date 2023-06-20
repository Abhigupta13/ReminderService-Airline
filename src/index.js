const express = require('express');
const bodyParser = require('body-parser');
const { sendBasicEmail } = require('./services/email.service')
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        // sendBasicEmail(
        //     'support@admin.com',
        //     'akg.temp22110@gmail.com',
        //     'hello 1',
        //     'How are you?'
        //     )
        });
}

setupAndStartServer();