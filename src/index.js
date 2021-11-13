const https = require("https")
const app = require("express")()
const port = 80
let server = https.createServer()
app.get('/', (req, res)=>{
    res.send("Hola")
})

app.listen(port, ()=>{
    console.log("Server running at port:", port)
})