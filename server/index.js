let express = require("express");
const fs = require("fs");
let app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/api/users", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
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

app.delete("/api/users/:id", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    let filteredUsers = users.filter(
      (user) => user.id !== Number(req.params.id)
    );
    let newUsers = JSON.stringify(filteredUsers);
    fs.writeFile("codeshare.json", newUsers, (err) => {
      if (err) throw err;

      res.status(204).end();
    });
  });
});

app.put("/api/users/:id", function (req, res) {
  fs.readFile("codeshare.json", (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    let updatedUsers = users.map((user) =>
      user.id === Number(req.params.id) ? req.body : user
    );
    let newUsers = JSON.stringify(updatedUsers);
    fs.writeFile("codeshare.json", newUsers, (err) => {
      if (err) throw err;

      res.status(204).end();
    });
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
