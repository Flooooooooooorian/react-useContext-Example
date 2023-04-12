import React from 'react';
import './App.css';
import AuthProvider from "./AuthContextProvider";
import Level1 from "./Level1";

function App() {
  return (
      <AuthProvider >
        <div className="App">
          <Level1 />
        </div>
      </AuthProvider>
  );
}

export default App;
