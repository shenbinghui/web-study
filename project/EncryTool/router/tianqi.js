const fetch = require('node-fetch');

exports.getTianqi = (req, res, next) => {
    fetch('https://api.github.com/users/github').then(rs => {
        return rs.json();
    }).then(data => {
        res.render('index', { page: 'tianqi', data: data });
    })
}