import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './Components/HomePage';
import Nav from './Nav';
import Profile from './Components/Profile';
import Favories from './Components/Favories';
import Basket from './Components/Basket';
import Login from './Login/Login';
import './App.css';
import Search from './Components/Search';
import Detail from './Components/Detail';
import Adress from './Components/Adress';





function App() {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("isLogin")))
  useEffect(() => {
    if (!isLogin || isLogin === null) {
      if (!window.location.href.includes("/login")) {
        window.location.href = "/login"
      }

    }
  }, [])
  return (
    <>
    {
      isLogin &&
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/favoriler" component={Favories} />
            <Route path="/sepetim" component={Basket} />
            <Route path="/profil" component={Profile} />
            <Route path="/search/:keyword" component={Search} />
            <Redirect from="/search/" to="/search/ "/>
            <Route path="/detay/:id" component={Detail} />
            <Route path="/adreslerim" component={Adress} />
          </Switch>
        </div>
      </Router>
    }

    {!isLogin &&
      <Router>
        <div className="Login">
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    }
  </>
  );
}

export default App;
