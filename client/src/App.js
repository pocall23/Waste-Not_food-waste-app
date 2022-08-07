import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, } from '@apollo/client';
// import { createHttpLink } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context';

// // import Home from "../src/pages/home/Home"


import AvailableFoods from './pages/AvailableFood/AvailableFood';
import Header from './components/Header/header';
import Homepage from './pages/Homepage/Homepage';
import SingleFood from './pages/SingleFood/SingleFood';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import FequentlyAskedQuestions from './pages/FequentlyAskedQuestions/FequentlyAskedQuestions'
import { useQuery } from '@apollo/client';
import { QUERY_FOODS } from './utils/queries';

// const httpLink = createHttpLink({
//   uri: '/graphql',

// });


// //Construct request middleware that will attach the JWT token to every request as an `authorization` header
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

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
  
//   cache: new InMemoryCache(),
// });

function App() {
  const { loading, error, data, refetch } = useQuery(QUERY_FOODS);

  function refetchFoods(){
    // trigger refetch data on graphql query
    refetch();
  }

  return (
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
                  path="/signup"
                  element={<Signup/>}>
                </Route>
                <Route
                  path="/login"
                  element={<Login/>}>
                </Route>
                <Route
                  path="/frequentlyAskedQuestions"
                  element={<FequentlyAskedQuestions/>}>
                </Route>
                <Route
                  path="/foods"
                  element={<AvailableFoods data={data} loading={loading}/>}>
                </Route>
                <Route
                  path="/food/:foodId"
                  element={<SingleFood onClickGrabFood={refetchFoods}/>}>
                </Route>
              </Routes>
            </div>
            {/* need a footer here */}
        </div> 
      </Router>
  ) 
}

export default App;
