const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/easypill/src"));
app.get("/*",function(request,response) {
    response.sendFile("index.html",{root: __dirname + "/dist/easypill/src/"})
});

app.listen(process.env.PORT || 8080);