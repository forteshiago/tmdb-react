import React from 'react';

import ResetCss from './assets/styles/Reset';
import BarHeader from './components/BarHeader';

function App() {
  return (
    <div className="App"
      style={
        {
          backgroundColor: '#CCCCCC', //Test for a background
          height: '2500px',
          display: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
      <ResetCss />
      <BarHeader />
    </div>
  );
}

export default App;
