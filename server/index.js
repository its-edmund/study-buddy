const express = require("express");
let cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const PORT = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:5000/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.use(express.json())

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
  const newCard = new Card({
    question: req.body.question,
    answer: req.body.answer,
  });
  newCard.save(function (err, fluffy) {
    if (err) return console.error(err);
  });
  res.send();
});

app.delete("/delete", (req, res) => {
  Card.deleteOne({ _id: req.body.id }, function (err) {
    if (err) return console.error(err);
  });
  res.send();
});

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
