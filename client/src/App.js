import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, } from '@apollo/client';
// import { createHttpLink } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context';

// import Home from "../src/pages/home/Home"


import AvailableFoods from './pages/AvailableFood/AvailableFood';
import Header from './components/Header/Header';
import Homepage from './pages/homepage/Homepage';

import SingleFood from './pages/SingleFood/SingleFood';
import { QUERY_FOODS } from './utils/queries';

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
                  path="/Foods"
                  element={<AvailableFoods data={data} loading={loading} />}>
                </Route>
                <Route
                  path="/Food/:foodId"
                  element={<SingleFood  onClickGrabFood={refetchFoods}/>}>
                </Route>
              </Routes>
            </div>
            {/* need a footer here */}
        </div> 
      </Router>
  ) 
}

export default App;
