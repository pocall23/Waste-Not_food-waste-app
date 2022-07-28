const db = require('../config/connection');

const { Food } = require('../models');

const foodData = require ('./foodData.json')

db.once('open', async () => {
  try {
    await Food.deleteMany({})

    const foods = await Food.insertMany(foodData);

    console.log('databased filled');
    process.exit(0);
  } catch (err) {
    throw err
  }

});
