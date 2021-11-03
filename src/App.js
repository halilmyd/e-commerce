import React from 'react'
import "./App.css"
import UrunListesi from './UrunListesi';
import Favoriler from './Favoriler';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={UrunListesi} />
          <Route path="/favoriler" component={Favoriler} />
        </Switch>
      </div>
    </Router>
  )
}
export default App;
