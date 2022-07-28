const { Schema, model } =require('mongoose');

const foodSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  servings:{
    type: Number,
    default: 1
  },
  image: {
    type: String,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  expiry:{
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Food = model('Food', foodSchema);

module.exports = Food;