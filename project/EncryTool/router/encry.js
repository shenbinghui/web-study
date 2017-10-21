exports.postEncry = (req, res, next) => {
    let data = req.body.encryfile;
    //这里写加密文件逻辑
    let buffer = new Buffer(data);

    for (let i = 0; i < buffer.length; i++) {
        buffer[i] += 1;
    }

    res.render('index', { encrydata: buffer.toString(), page: 'encry' });

}

exports.postDecry = (req, res, next) => {
    let data = req.body.encryfile;
    //这里写解密文件逻辑
    let buffer = new Buffer(data);
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] -= 1;
    }
    res.render('index', { encrydata: buffer.toString(), page: 'encry' });
}