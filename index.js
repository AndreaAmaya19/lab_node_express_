const express = require('express');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');

mongoose.connect(dbConfig.dbStringConnect);

const conn = mongoose.connection;

const port = 3001;

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.json({status:200});
})

app.use('/products', routes.productsRoutes);
app.use('/sales', routes.salesRoutes);

app.listen(port, ()=> {
    console.log('listening on port http://localhost:${port}');
});