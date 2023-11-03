const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require ('./routs/Drink.rout'))

mongoose.connect("mongodb+srv://Lalo:1234@cluster0.hpgfhyn.mongodb.net/", {
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
  console.log('Сервер запущен успешно http://localhost:4000')
})