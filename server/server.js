const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const multer = require ('multer');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//multer//
const storage = multer.diskStorage({
  destination: path.join(__dirname,'../client/public/uploads'),
  filename: (req,file,callback) => {
    callback (null,new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));
app.use(require('../client/src/routes'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/images', express.static(path.join(__dirname, '../client/images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);