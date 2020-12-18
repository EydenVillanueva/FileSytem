const express = require('express');
const bodyParser = require('body-parser');

//Models & Database
const sequelize = require('./util/database');

//Routes
const fileRoutes = require('./routes/file');

//Models
const File = require('./models/file');
const Allergy = require('./models/allergy');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: false
    }));

app.use('/files', fileRoutes);

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    console.log(`Starting System on port ${port}...`);

    app.listen(port, () => {
        console.log(`Express server started on port ${port}`);
    });
}

init();
