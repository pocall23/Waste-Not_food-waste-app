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
    type: String,
   
  },
  imageUrl: {
    type: String,
  },
  
  ingredients: {

    type: String,
    // required: true,
  },
  
  expiry:{
    type: String,
    
  },
});

const Food = model('Food', foodSchema);

module.exports = Food;