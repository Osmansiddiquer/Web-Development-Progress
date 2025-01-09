import express from 'express';
import mongoose from 'mongoose';
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import router from './router';


const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Sever running on http://localhost:8080/');
});


