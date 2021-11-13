const https = require("https")
const app = require("express")()
app.set('port', process.env.port || 80)
app.get('/', (req, res)=>{
    res.send("Hola")
})

app.listen(app.get('port'), ()=>{
    console.log("Server running at port:", port)
})