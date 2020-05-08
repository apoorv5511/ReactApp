import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className='App'>
<h1>Welcome to Shopping Mart</h1>
      </div>
      <div className='App1'>
        <Home />
       </div> 
      </div>

    );
  }
}

export default App;
