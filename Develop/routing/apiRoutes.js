var fs = require("fs");

fs.readFile("../db/db.json", "utf8", (error, data) => {

    if (error) {
      return console.log(error);
    }
  
    console.log(data);
  
  });