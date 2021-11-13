const express = require("express")
const app = express()
app.set('port', process.env.port || 8080)
app.use('/', express.static(__dirname + '/www'))
app.use('/api/', (req, res)=>{
    res.send("Welcome to api")
})

app.listen(app.get('port'))