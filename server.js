const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logger");
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')

const PORT = process.env.port || 3000;

app.use(logger);
//lets our app recieve and parse json data
app.use(express.json());

//now app will be able to parse cookies
app.use(cookieParser())

//telling server where to find static files like css or images
app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "/views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
