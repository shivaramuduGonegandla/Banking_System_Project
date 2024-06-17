import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import NewAccount from './Components/NewAccount';
import Balance from './Components/Balance';
import Withdraw from './Components/Withdraw';
import Deposit from './Components/Deposit';
import Transfor from './Components/Transfor';
import CloseAccount from './Components/CloseAccount';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      
    </Router>
  );
}

export default App;
