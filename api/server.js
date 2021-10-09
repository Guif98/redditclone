import express from 'express';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import User from './models/User.js';
import jwt from 'jsonwebtoken';

const secret = 'secret123';

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

await mongoose.connect('mongodb://localhost:27017/reddit', {useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;
db.on('error', console.log)

app.get('/', (req, res) => {
    res.send('ok')
});

app.post('/register', (req, res) => {
    const {username} = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({username, password});
    user.save().then(user => {
        jwt.sign({id: user._id}, secret, (err, token) => {
            console.log(token)
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.status(201).cookie('token', token).send();
            }
        })
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    })
});


app.listen(4000);