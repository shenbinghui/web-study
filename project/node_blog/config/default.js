module.exports = {
	port:3000,
	session:{
		secret:'nodeblog',
		key:'nodeblog',
		maxAge:2592000000
	},
	db:'nodeblog',
	mongodb:'mongodb://localhost:27017/nodeblog'
}