let express = require("express");
let app = express();

app.get("/", (request, response) => {
  console.log(request);
  console.log(response);
  response.send("Hello! This is pavani");
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
