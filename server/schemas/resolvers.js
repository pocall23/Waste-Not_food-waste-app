const { Food } = require('../models');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find();
    },
    singleFood: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId })
    }
  },

  Mutation: {
    // addFood: async (parent, )
    removeFood: async(parent, { foodId }) => {
      return Food.findOneAndDelete({ _id: foodId });
    },
  }
};



module.exports = resolvers;