const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const authRoutes = require("./routes/auth");
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => {
  res.send("Task Management API is running ..");                
});

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});