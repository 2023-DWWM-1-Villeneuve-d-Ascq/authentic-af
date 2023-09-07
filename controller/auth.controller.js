require('dotenv').config();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')


const connectDB = require('../config/db');

//connexion
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

const email = process.env.EMAIL_ADMIN