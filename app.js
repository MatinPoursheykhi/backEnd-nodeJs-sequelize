const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000
const db = require('./models')

app.use(cors()); 
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./upload'))
require('./routes')(app)

db.connection.sync({
    alter:
    // {drop:false}
    true
    // force:true
})


app.get('/', (req, res) => {
    res.send(`Hello World! the server is running on port ${port}`)
})

app.listen(port, () => {
    console.log('it is run');
})

