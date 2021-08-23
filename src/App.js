import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import ResetCss from './assets/styles/Reset';
import BarHeader from './components/BarHeader';
import BarViews from './components/BarViews';
import Routes from './routes'

function App() {
  return (
    <div className="App"
      style={
        {
          backgroundColor: '#CCCCCC', //Test for a background
          //height: '2500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
      <BrowserRouter>
        <ResetCss />
        <BarHeader />
        <BarViews />
        <Routes />
      </BrowserRouter>

    </div>
  );
}

export default App;
