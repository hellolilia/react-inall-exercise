import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './calculator.less';

class Calculator extends Component {


    render() {
        return(
            <div className='calculator'>

                <Link to='/'>回到主页</Link>

            </div>
        );
    }

}

export default Calculator;