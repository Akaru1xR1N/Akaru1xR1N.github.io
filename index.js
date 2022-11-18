const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.send("<h1><center>hello world</center></h1><br><a href='83306f86520d559ff48abc6d8ea9a84e83b8db43.zip'>click this to download</a>")
})

app.listen(80)