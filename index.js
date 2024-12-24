// const express = require('express');
import express, { urlencoded } from 'express';
import userRoutes from './routes/user.routes.js';
import connect from './connections/connect.js';

const app = express();
connect();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
userRoutes(app);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});