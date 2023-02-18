require('dotenv').config();
const http=require('https');
const app=require('./index');


const serve=http.createServer(app);
serve.listen();
