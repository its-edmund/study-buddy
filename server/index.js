const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cards.ahocn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const cardSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const Card = mongoose.model("Card", cardSchema);

app.get("/allcards", (req, res) => {
  Card.find(function (err, cards) {
    if (err) return console.error(err);
    res.send(cards);
  });
});

app.post("/add", (req, res) => {
  console.log("route worked");
  const newCard = new Card({
    question: req.query.question,
    answer: req.query.answer,
  });
  newCard.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  res.send();
});

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
