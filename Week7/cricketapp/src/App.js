// Cricket App - demonstrates conditional rendering with a flag
import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

const App = () => {
  const flag = false;  // toggle to true to show all players
  return (
    <div className="App">
      <h1>Cricket App</h1>
      {/* Render either full list or Indian players based on flag */}
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
