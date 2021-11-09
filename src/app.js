const express = require("express");
const app = express();
const port = process.env.PORT || 3000; //assign port number while hosting
const path = require("path");
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("error", {
    errorMsg: "OOPS! Page Not Found, Click below to go back",
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
