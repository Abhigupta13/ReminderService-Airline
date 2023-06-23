const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const jobs = require('./utils/job')
const  EmailService  = require('./services/email-service')

const {createChannel,subscribeMessage} = require('./utils/messageQueue')
const { PORT, REMINDER_BINDING_KEY } = require('./config/serverConfig');
const TicketController = require('./controllers/ticket-controller')

const setupAndStartServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets',TicketController.create);

    const channel = await createChannel();
    subscribeMessage(
        channel,
        // undefined,
        EmailService.subscribeEvents, 
        REMINDER_BINDING_KEY
         );
    app.listen(PORT, async() => {
        console.log(`Server started at port ${PORT}`);


        // jobs();
        

        });
}

setupAndStartServer();