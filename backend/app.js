const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const userRouter = require('./routes/user');
const contactRouter = require('./routes/contact');
const messageRouter = require('./routes/message');

const corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        callback(null, true)
    }
}

const app = express();
app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/message', messageRouter);


module.exports = app;
