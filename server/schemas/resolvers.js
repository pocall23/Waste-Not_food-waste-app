const { Food, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    foods: async () => {
      return Food.find();
    },
    singleFood: async (parent, { foodId }) => {
      return Food.findOne({ _id: foodId })
    },

    users: async () => {
      return User.find();
    },
    user: async () => {
      return User.findOne({ _id: userId })
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      
      const user = await User.create({ name, create, password });
      const token = signToken(user);

      return { token, user }
  },
  login: async (parents, { email, password }) => {
    const user = await User.findOne({ email });

    if(!user){
      throw new AuthenticationError('No user with this email found')
    }

    const correctPassword =  await user.isCorrectPassword(password);

    if(!correctPassword){
      throw new AuthenticationError("Incorrect Password!");
    }

    const token = signToken(user);
    return { token, user }
  },

  removeUser: async (parent, { userId }) =>{
    return User.findOneAndDelete({ _id: userId })
  }
  },

  Mutation: {
    addFood: async (parent, { name, description, servings, ingredients } ) => {
      return Food.create({ name, description, servings, ingredients });
    },

    removeFood: async(parent, { foodId }) => {
      return Food.findOneAndDelete({ _id: foodId });
    },
  }
};



module.exports = resolvers;