const db = require('../config/connection');

const { Food, User } = require('../models');

const foodData = require ('./foodData.json');

const userSeeds = require('./userSeeds.json')

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

db.once('open', async () => {
  try {
    await User.deleteOne({});
    await User.create(userSeeds);

    process.exit(0)
  }catch (err){
    throw err;
  }
})
