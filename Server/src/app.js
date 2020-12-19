const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var cors = require('cors');

//Models & Database
const sequelize = require('./util/database');

//Routes
const fileRoutes = require('./routes/FileRoutes/fileRoutes');

dotenv.config();

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: true
    }));

app.use('/files', fileRoutes);

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        if(!process.env.SYNC){
            sequelize
                .sync()
                .then(console.log)
                .catch(console.log);
        }

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
