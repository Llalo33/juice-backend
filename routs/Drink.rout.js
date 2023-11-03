const express = require('express')
const juiceController = require('../models/controller/Drink.controller')
const { model } = require('mongoose')


const app = express()

app.get('/drinks', juiceController.getDrink)
app.get('/drinks/in-stock', juiceController.getStockDrink)
app.get('/drinks/:id', juiceController.getSpecificDrink)
app.post('/drinks', juiceController.postDrink)
app.delete('/drinks/:id', juiceController.deleteDrink)
app.patch('/drinks/:id', juiceController.patchDrink)

module.exports = app