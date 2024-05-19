require('./connection')
const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

app.use('/categories', express.static(path.join(__dirname + '/assets/categories')))
app.use('/assets', express.static(path.join(__dirname + '/assets')))

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)
app.use('/admin', adminRoutes)

module.exports = app