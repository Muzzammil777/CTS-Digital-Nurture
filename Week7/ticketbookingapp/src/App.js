// Ticket Booking App - demonstrates conditional rendering based on login state
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import UserPage from './components/UserPage';
import GuestPage from './components/GuestPage';


function App() {
  // Track user authentication state
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      {
        // Show different pages based on login status
        isLoggedIn? 
          <>
            <Logout onLogout={setIsLoggedIn} />
            <UserPage />
          </>
          : 
          <>
             <Login onLogin={setIsLoggedIn} />
            <GuestPage />
          </>
      }
    </div>
  );
}

export default App;
