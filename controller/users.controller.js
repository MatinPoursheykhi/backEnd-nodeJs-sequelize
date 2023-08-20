const db = require('../models')
const connection = db.connection
exports.add = (_req, _res) => {
    if (!!_req.body.mobile && !!_req.body.age) {
        db.Users.create(_req.body)
            .then((result) => {
                _res.status(200).send(result)
            }).catch((err) => {
                _res.status(500).send(err)
            });
    } else
        _res.status(400).send({ message: 'mobile and age are force' })
}
exports.edit = (_req, _res) => {
    db.Users.update(_req.body, {
        where: {
            id: _req.params.id
        }
    })
        .then((result) => {
            if (result[0])
                _res.status(200).send({ message: 'success' })
            else
                _res.status(400).send({ message: 'failed' })
        }).catch((err) => {
            _res.status(500).send(err)
        });
}
exports.list = (_req, _res) => {
    db.Users.findAll()
        .then((result) => {
            _res.status(200).send(result)
        }).catch((err) => {
            _res.status(500).send(err)
        });
}
exports.info = (_req, _res) => {
    db.Users.findByPk(_req.params.id)
        .then((result) => {
            _res.send(result)
        }).catch((err) => {
            console.log(err);
        });
}
exports.delete = (_req, _res) => {
    db.Users.destroy({ where: { id: _req.params.id } })
        .then((result) => {
            _res.status(200).send({ message: 'the operation has done successfuly' })
        }).catch((err) => {
            _res.status(500).send(err)
        });
}
