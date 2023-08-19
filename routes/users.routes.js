const controller = require('../controller/users.controller')
module.exports = function (app) {
    app.post('/users', controller.add)
    app.put('/users/:id', controller.edit)
    app.get('/users', controller.list)
    app.get('/users/info/:id', controller.info)
    app.delete('/users/:id', controller.delete)
}