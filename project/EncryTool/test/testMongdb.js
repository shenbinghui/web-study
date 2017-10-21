const PlainModel = require('../model/plainModel');

// PlainModel.count({}).then(function(d){
// 	console.log(d);
// });
function cb(d){
	console.log(d);
}

PlainModel.getPageData({skipData:3,pageCount:3}).then(cb);