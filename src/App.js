import React from 'react';

import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AvailableMeals from './components/Meals/AvailableMeals';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
        <AvailableMeals />
      </main>
    </React.Fragment>
  )
}

export default App;
