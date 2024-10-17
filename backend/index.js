require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db/connectDB");
const authRoutes = require("./routes/auth.route");

const app = express();
const Port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to parse incomeing request:req.body
app.use(cookieParser()); // allows us to parse incomeing cookie
app.use("/api/auth", authRoutes);
app.listen(Port, () => {
  dbConnect();
  console.log(`Server is running on port ${Port}`);
});
