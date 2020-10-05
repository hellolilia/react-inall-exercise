import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './calculator.less';

class NumItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.onNum(this.props.text);
    }
    render() {
        return <div onClick={this.handleClick}>{this.props.text}</div>
    }
}

class OperItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onOper(this.props.text);
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.text}
            </div>);
    }
}

class CommandItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onCommand(this.props.text);
    }
    render() {
        return <div onClick={this.handleClick}>{this.props.text}</div>
    }
}

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleNum = this.handleNum.bind(this);
        this.handleCommand = this.handleCommand.bind(this);
        this.handleOper = this.handleOper.bind(this);
        this.state = {
            inputs: [],
            result: '',
            command: ''
        }
        this.prevInput = "";
    }

    getResult(str) {
        if (!str)
            str = this.state.inputs.join('');
        return (new Function(`return ${str}`))();
    }

    handleCommand(cmd) {
        if (cmd === "Clear")
        {
            this.prevInput = "";
            this.setState({ inputs: [], result: 0 });
        }
        else if (cmd === "=")
            this.setState({ result: this.getResult() });
    }

    handleNum(numChar) {
        this.prevInput += numChar;
        this.state.inputs.push(numChar);
        this.setState({ inputs: this.state.inputs });
    }

    handleOper(ope) {
        if (false === /[\d]+/.test(this.prevInput)) {
            return;
        }
        if (ope === "×")
            ope = "*";
        this.state.inputs.push(ope);
        this.prevInput = ope;
        this.setState({ inputs: this.state.inputs });
    }

    render() {
        return (
            <div className='calculator'>
                <p>在线计算器</p>
                <div className="container">
                    <div className="result"><span>{this.state.inputs}</span>={this.state.result}</div>
                    <div className="input">
                        <OperItem text="+" onOper={this.handleOper}/>
                        <OperItem text="-" onOper={this.handleOper}/>
                        <OperItem text="×" onOper={this.handleOper}/>
                        <NumItem text="7" onNum={this.handleNum}/>
                        <NumItem text="8" onNum={this.handleNum}/>
                        <NumItem text="9" onNum={this.handleNum}/>
                        <NumItem text="4" onNum={this.handleNum}/>
                        <NumItem text="5" onNum={this.handleNum}/>
                        <NumItem text="6" onNum={this.handleNum}/>
                        <NumItem text="1" onNum={this.handleNum}/>
                        <NumItem text="2" onNum={this.handleNum}/>
                        <NumItem text="3" onNum={this.handleNum}/>
                        <NumItem text="0" onNum={this.handleNum}/>
                        <CommandItem text="Clear" onCommand={this.handleCommand}/>
                        <CommandItem text="=" onCommand={this.handleCommand}/>
                    </div>
                </div>
                <Link to='/'>回到主页</Link>
            </div>
        )
    }
}


export default Calculator;