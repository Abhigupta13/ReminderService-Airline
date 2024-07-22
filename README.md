# Welcome to Reminder Service for Airline project

## Project Setup

### Clone the Repository
To set up the project on your local machine, start by cloning the repository:

```bash
git clone https://github.com/Abhigupta13/ReminderService-Airline.git
cd ReminderService-Airline
```

### Install Dependencies
Navigate to the root directory of the project and install the necessary dependencies:

```bash
npm install
npm i nodemailer
npm i node-cron
```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
DB_USERNAME=<YOUR_DB_LOGIN_NAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_NAME=ReminderService_DB_DEV
DB_HOST=127.0.0.1
DB_DIALECT=mysql
EMAIL_HOST=<YOUR_EMAIL_HOST>
EMAIL_PORT=<YOUR_EMAIL_PORT>
EMAIL_USER=<YOUR_EMAIL_USER>
EMAIL_PASS=<YOUR_EMAIL_PASSWORD>
```

### Database Configuration
Inside the `src/config` folder, create a new file `config.json` and add the following JSON configuration:

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "ReminderService_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Database Setup
Once you've configured your database settings, go to the `src` folder from your terminal and execute the following commands to set up the database:

```bash
npx sequelize db:create
npx sequelize db:migrate
```

## Emailing with Nodemailer and Scheduling with Node-Cron
This service uses Nodemailer for sending emails and Node-Cron for scheduling tasks. Below is an overview of how these packages are utilized:

- **Nodemailer:** Sends email reminders and notifications to users about their flight schedules and bookings.
- **Node-Cron:** Schedules tasks to run at specified times, ensuring timely reminders and notifications.

For detailed implementation, please take a look at the service's codebase.
