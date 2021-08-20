import React from 'react';

import ResetCss from './assets/styles/Reset';
import BarHeader from './components/BarHeader';
import BarViews from './components/BarViews';

function App() {
  return (
    <div className="App"
      style={
        {
          backgroundColor: '#CCCCCC', //Test for a background
          height: '2500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
      <ResetCss />
      <BarHeader />
      <BarViews />

    </div>
  );
}

export default App;
