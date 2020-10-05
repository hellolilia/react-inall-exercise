import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './timer.less';

class Timer extends Component {


    render() {
        return(
            <div className='timer'>

               <Link to='/'>回到主页</Link>
            </div>
        );
    }

}

export default Timer;