import React, {Component} from 'react';
import './app.less';
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom";
import Home from "./Home";
import Timer from "./Timer"
import Calculator from "./Calculator"

class App extends Component {
  render() {
    return (
      <div className="app">
          <BrowserRouter>
              <header>
              <ul>
                  <li><NavLink to="/timer" activeClassName="active">在线倒计时器</NavLink></li>
                  <li><NavLink to='/calculator' activeClassName="active">在线计算器</NavLink></li>
                  <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
              </ul>
              </header>
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/calculator' component={Calculator}/>
                  <Route path='/timer' component={Timer}/>
              </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
