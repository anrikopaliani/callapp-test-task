let express = require("express");
const fs = require("fs");
let app = express();

app.get("/", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    res.send(users);
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
