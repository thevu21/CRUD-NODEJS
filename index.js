const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 8000;

const app = express();

const todoRoutes = require('./routes/Todo');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/todoapp', {
    useNewUrlparser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('Da ket no')
    } else {
        console.log('Chua ket noi duoc: ' + err)
    }
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});