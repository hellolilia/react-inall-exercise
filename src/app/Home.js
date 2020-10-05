import React from 'react';
import './home.less';
import calculatorImage from "../images/calculator.png"
import timerImage from "../images/timer.png"
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className="home">
          <div className = "heroImage" />
          <h1>在线实用工具</h1>
          <div className="grayBox" />
          <img className="calculatorImage" src={calculatorImage} alt="calculatorImage"/>
          <img className="timerImage" src={timerImage} alt="timerImage"/>
          <p className="nav">
              <Link to='/calculator'>计算器</Link>
              <Link to='/timer'>倒计时器</Link>
          </p>
      </div>
  );
};

export default Home;