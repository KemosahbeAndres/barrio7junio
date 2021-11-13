const https = require("https")
const app = require("express")()
app.set('port', process.env.port || 8080)
app.get('/', (req, res)=>{
    res.send("Hola")
})

app.listen(app.get('port'))