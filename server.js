const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");

app.use(express.json());

app.use("/api/bikes", require("./routes/bikesRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/api/bookings", require("./routes/bookingsRoute"));
app.get("/", (req, res) => res.send("Hello to Go-Bikefy"));

app.listen(port, () => console.log(`Node JS Server Started in port ${port}`));
