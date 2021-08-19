import React from 'react';

import ResetCss from './assets/styles/Reset';
import BarHeader from './components/BarHeader';

function App() {
  return (
    <div className="App">
      <ResetCss />
      <BarHeader />
      <h1>TMDB Flix</h1>
    </div>
  );
}

export default App;
