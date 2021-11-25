const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");

app.use(express.json());

app.use("/api/bikes", require("./routes/bikesRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/bookings", require("./routes/bookingsRoute"));
app.get("/", (req, res) => res.send("Hello World"));

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Node JS Server Started in port ${port}`));
