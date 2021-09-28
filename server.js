const express = require("express");
const app = express();

app.use(express.static("www"));
app.get("/*",function(request,response) {
    response.sendFile("index.html",{root: "www"})
});

app.listen(process.env.PORT || 8080);