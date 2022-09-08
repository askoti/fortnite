import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import News from './components/News';
import FnMap from "./components/FnMap";
import ItemShop from "./components/ItemShop";
import Cosmetics from './components/Cosmetics';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path='/item-shop' element={<ItemShop />}/>
          <Route exact path='/' element={<FnMap />}/>
          <Route exact path='/news' element={<News />}/>
          <Route exact path='new-cosmetics' element={<Cosmetics />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
