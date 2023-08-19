const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000
const db = require('./models')
// use middileware
app.use(cors()); 
// cors will allow front-origins to access to the server 
app.use(express.json()) 
// enable body in requests in json type (It parses incoming requests)
app.use(express.urlencoded({ extended: true }))
// (extended) rich incoming objects and arrays to be URL-encoded format// console.log(encodeURIComponent('h o p k')) // URL-encoded h%20o%20p%20k
app.use(express.static('./upload'))
// To serve static files such as images,CSS files, and JavaScript files
require('./routes')(app)

// You can use db.connection.sync() to automatically synchronize all models. Example:
db.connection.sync({
    // alter:
    // {drop:false}
    // true
    // force:true
})


app.get('/', (req, res) => {
    res.send(`Hello World! the server is running on port ${port}`)
})

app.listen(port, () => {
    console.log('it is run');
})

