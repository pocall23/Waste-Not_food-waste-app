const db = require('../config/connection');

const { Food, User } = require('../models');

const foodData = require ('./foodData.json')
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Food.deleteMany({})
    await User.deleteMany({});

    await User.create(userSeeds)

    for (let i = 0; i<foodData.length; i++) {
      const { _id, donatedBy } = await Food.create(foodData[i]);
      const user = await User.findOneAndUpdate(
        {
          username: donatedBy
        },
        {
          $addToSet: {
            foods: _id
          },
        }
      );
    } 

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('databased filled');
  process.exit(0);
});
