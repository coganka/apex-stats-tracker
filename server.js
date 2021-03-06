const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Dev Log
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});