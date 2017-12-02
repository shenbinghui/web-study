module.exports = function(app){
	app.get('/',function(req,res){
        res.send('mifidata');
	});

	app.use('/imei',require('./imeiCon'));
}