const express = require('express');
const morgan = require('morgan');
let app = express();

const bookRouter = require('./Routes/BookRoutes')
app.use(express.json());
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));

}
app.use('/api/Books', bookRouter)

module.exports = app; 