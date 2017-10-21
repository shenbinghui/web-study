const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


//模板引擎
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//使用静态文件
app.use(express.static(path.join(__dirname,'public')));

//路由
router(app);

app.listen(3000);