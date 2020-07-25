var fs = require("fs");
var path = require('path')



module.exports = function(app) {

  var dbjson = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  var dbjsonTwo = JSON.stringify(fs.appendFile("./db/db.json", "utf8"));

    app.get("/api/notes", function(req, res) {
      res.json(dbjson);
    });

    app.post("/api/notes", function(req, res) {
      dbjsonTwo.push(req.body);
    });
        

   

}

