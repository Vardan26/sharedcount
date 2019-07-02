import express from 'express';
import testRouter from './api/test/route';
import webRouter from './web/routes/webRouter';
import loginRouter from './api/login/route';
import cors from 'cors';
import helmet from 'helmet';
import connection from './database/connection';
import jwt from 'express-jwt';
import passport from 'passport';
import path from 'path';
require('./passport');

const app = express();
app.get('/app/*', function (req, res) {
    res.sendFile(__dirname + '/public/dist/index.html');
});
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "web/views"));
connection.connect();
app.use(helmet());
app.use(cors({
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
}));
app.use('/', webRouter);
app.use('/auth',loginRouter);

app.use('/api/test', passport.authenticate('jwt', {session: false}), testRouter);

app.use(express.static('public/dist'));

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
