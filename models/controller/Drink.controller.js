const Juice = require("../Drink.model");

const juiceController = {
  getDrink: async (req, res) => {
    try {
      const juice = await Juice.find({}, { _id: 1, name: 1, price: 1 });
      res.json(juice);
    } catch (error) {
      res.json(error.message);
    }
  },
  getStockDrink: async (req, res) => {
    try {
      const juice = await Juice.find({ stock: true });
      res.json(juice)
    } catch (error) {
      res.json(error.message)
    }
  },
  getSpecificDrink: async (req, res) => {
    try {
        const juice = await Juice.findById(req.params.id)
        res.json(juice)
    } catch (error) {
        res.json(error.message)
    }
  },
  postDrink: async (req, res) => {
    try {
        const juice = await Juice.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            coffein: req.body.coffein,
            volume: req.body.volume,
            description: req.body.description 
        }); 
        res.json(juice)
    } catch (error) {
        res.json(error.message)
    }
  },
  deleteDrink: async (req, res) => {
    try {
        const juice = await Juice.findByIdAndRemove(req.params.id)
        res.json(juice)
    } catch (error) {
        res.json(error.message)
    }
  },
  patchDrink: async (req, res) => {
    try {
        const juice = await Juice.findByIdAndUpdate(req.params.id)
        res.json(juice)
    } catch (error) {
        res.json(error.message)
    }
  }
};

module.exports = juiceController
