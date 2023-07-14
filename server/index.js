let express = require("express");
const fs = require("fs");
let app = express();

app.use(express.json());

app.get("/api/users", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    console.log(users);
    res.json(users);
  });
});

app.post("/api/users", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    users.push(req.body);
    let newUsers = JSON.stringify(users);
    fs.writeFile("codeshare.json", newUsers, (err) => {
      if (err) throw err;

      res.json(req.body);
    });
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
