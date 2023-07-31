const express = require("express");
const app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//task 1
app.get("/", (req, res) => {
  res.send("<h1> Hello World </h1>");
});

//task 2
app.post("/task2", (req, res) => {
  const data = req.body.array;
  console.log(req.body);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  console.log(sum);
  const d = {
    sum: sum,
  };
  console.log(d);
  res.send(JSON.parse(JSON.stringify(d)));
});

//task 3
fs.readFile("file.txt", function (err, data) {
  if (err) throw err;
  let count = 0;
  let array = data.toString().split("\n");
  for (i in array) {
    //     console.log("i:", i);
    let da = array[i].toString().split(" ");
    //     console.log(da);
    for (j in da) {
      count++;
    }
  }
  console.log("Total no of words inside file is :", count);
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
