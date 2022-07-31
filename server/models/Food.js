const { Schema, model } =require('mongoose');

const foodSchema = new Schema({
  title:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  public_id: 
    {
      type: String,
      required: true,
    },
});

const Food = model('Food', foodSchema);

module.exports = Food;