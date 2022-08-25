const express = require("express");
const addDays = require("date-fns/addDays");

const result = addDays(new Date(), 100);

let app = express();

app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
module.exports = app;
