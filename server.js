require('dotenv').config();
const http=require('http');
const app=require('./index');


const serve=http.createServer(app);
serve.listen(process.env.PORT);