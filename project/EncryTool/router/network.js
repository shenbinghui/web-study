const dns = require('dns');

exports.getNetwork = (req, res, next) => {
    let domain = "www.baidu.com";
    dns.resolve4(domain, function(err, address) {
        res.json({ data: address });
    })
}

exports.postNetwork = (req, res, next) => {
    let domain = req.body.domain;
    dns.resolve4(domain, function(err, address) {
        res.json({ data: address });
    })
}