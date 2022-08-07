import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3001/graphql',

// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  // link: authLink.concat(httpLink),
  uri: '/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >

      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



