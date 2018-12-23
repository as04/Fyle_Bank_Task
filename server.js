import http from 'http';
import express from 'express'
import bodyParser from 'body-parser'
import ifsc from './routes/ifsc.route'
import bankDet from './routes/bankDet.route'
import connToDb from './db/conn'

const app = express();

connToDb();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.get('/', (req, res)=> res.send('Alive Me'));
app.use('/ifsc', ifsc);
app.use('/bank_details', bankDet);
app.get('/', (req, res)=> res.render('index', {page:'Home', menuId:'home'}));

app.listen(5001, '0.0.0.0', ()=> console.log('Server running at http://127.0.0.1:5001/'))

