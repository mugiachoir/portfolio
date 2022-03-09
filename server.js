const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const compression =require('compression');

const app =express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

if (process.env.NODE_ENV.trim() === "production") {
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, "client/build")));
  
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
  }
  
  app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server running on port" + port);
  });
  
  app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
  });