require("dotenv").config();

const express = require("express");
const cors = require("cors");
const IndexRouter = require("./router");
const mongoose = require("mongoose");

console.log(process.env.DB_URL);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.use(IndexRouter);

const url =
  "mongodb+srv://luthfimacos:macosaccs@luthi-work.qxilk.mongodb.net/health_booking?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8080;

mongoose
  .connect(url || 3000, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("connected to mongo");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
