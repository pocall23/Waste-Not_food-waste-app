import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client';
import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

// import Home from "../src/pages/home/Home"
import Homepage from './pages/homepage/Homepage';
import AvailableFoods from './pages/AvailableFood/AvailableFood';
import Header from './components/Header/Header';
import SingleFood from './pages/SingleFood/SingleFood';
import AvaliableFoods from './pages/AvaliableFood/AvaliableFood';
import Register from './pages/register/Register';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',

});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
            <Header/>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<Homepage/>}>
                </Route>
                <Route
                  path="/Foods"
                  element={<AvailableFoods/>}>
                </Route>
                <Route
                  path="/Food/:foodId"
                  element={<SingleFood/>}>
                </Route>
                <Route
                  path="/foods"
                  element={<AvaliableFoods/>}>
                  </Route>
                  <Route
                  path ="/register"
                  element={<Register/>}>
                  </Route>
              </Routes>
            </div>
            {/* need a footer here */}
        </div> 
      </Router>
    </ApolloProvider>
  ) 
}

export default App;
