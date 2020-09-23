import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './components/IndexPage';
import Phrase from './components/PhrasePage';
import Guessing from './components/GuessingPage';
import Layout from './components/Layout';
import Victory from './components/Victory';
import Defeat from './components/Defeat';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          
          <Route path='/phrase'><Phrase /></Route>
          <Route path='/guessing'><Guessing /></Route>
          <Route path='/victory'><Victory /></Route>
          <Route path='/defeat'><Defeat /></Route>
          <Route path='/'><Index /></Route>

        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
