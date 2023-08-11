const express = require('express');
const universityRouter = require('../router/universityRouter')
const app = express();

app.get('/', (req,res,next) => {
    res.status(200).send('service is up')
});

app.use('/search', universityRouter)

app.use((req,res,next) => {
    const error = new Error("NOT Found");
    error.status = 404;
    next(error)
});

app.use((error,req,res,next) => {
 res.status(error.status || 500).json({
    error: {
        message: error.message,
        status: error.status,
        method: req.method
    }
 });
});

module.exports = app;
