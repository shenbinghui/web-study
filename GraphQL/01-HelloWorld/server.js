import express from 'express'
import fs from 'fs'
import Schema from './src/schema'
import graphqlHttp from 'express-graphql'
import path from 'path'

// console.log(Schema);
const app = express()
const port =3000;

//模板引擎
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'views')));

app.get('/q',(req,res)=>{
    var context = fs.readFileSync(path.join(__dirname,'views/fortest.html'));
	res.send(context.toString());
})

//http://localhost:3000?query={user(id: 3) {id name}}

app.use('/',graphqlHttp({
	schema:Schema,
	graphiql:true
}))

let server = app.listen(port,function(){
	let addr = server.address();
	let bind = typeof addr === 'string'?'pipe ' + addr : 'port ' + addr.port;
	console.log('Listening on ' + bind);
})