const express = require("express");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const boatsRoutes = require('./routes/boatsRoutes');
const bookingRoutes = require('./routes/bookingRoutes');    
const i18n = require('i18n');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const port = process.env.PORT || 3001;


require('dotenv').config();   // import secret jwt key
require('./database');   // import database

// Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
  });
  
// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(i18n.init);
app.use(limiter);
app.use((req, res, next) => { 
    console.log(`${req.method}:${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/boats', boatsRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/locales', express.static(path.join(__dirname, 'locales')));

// const bcrypt = require('bcrypt');
// const function1 = async () => {
//   const hashPassword = async (password) => {
//     const saltRounds = 10; // Number of salt rounds for bcrypt
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   };
//   const hashedPassword = await hashPassword('test');
//   console.log(hashedPassword);
//   }
// function1();

app.listen(port, '0.0.0.0', () => console.log(`Running on Port ${port}!`));