const utils = require('../common/utils');

exports.postFastEarse = (req, res, next) => {
    console.log(req.body.data);
    let cmds = req.body.data;
    cmds.forEach((cmd, i) => {
        utils.sendCmd(cmd).then((rs) => {
                console.log(`rs=${rs}`);
                console.log(`i=${i}`);
                if (i == cmds.length - 1) {
                    res.json({ 'result': 'ok' });
                }
            },
            (err) => {
                console.log(`err=${err}`);
                res.json({ 'result': err });
            });
    });
}