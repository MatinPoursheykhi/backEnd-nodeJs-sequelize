module.exports = (app) => {
    app.use(function (req, res, next) {
        // let corsOptions = { origin: ['http://localhost:5173'] }
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        next()
    })
    require('./users.routes')(app)
}