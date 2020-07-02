import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props){
    if(props.celsius>=100){
        return <p>水烧开啦</p>
    }
    return <p>水没有开呢</p>
}

const scaleNames = {
    c:'Celsius(普通)',
    f:'Fahrenheit(华氏)'
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature,convert){// 参数1是字符串类型的输入，参数2是转换函数
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature:''};
    }

    handleChange(e){
        // this.setState({temperature:e.target.value});
        this.props.onTempChange(e.target.value);
    }

    render(){
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>输入{scaleNames[scale]}温度：</legend>
                <input value={temperature} onChange={this.handleChange}></input>
            </fieldset>
        );
    }
}

class Calculator extends React.Component{
    /* constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature:''};
    }

    handleChange(e){
        this.setState({temperature:e.target.value});
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>输入温度：</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </fieldset>
        )
    } */
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }

    handleCelsiusChange(temperature){
        this.setState({
            scale:'c',
            temperature
        });
    }

    handleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature
        });
    }
    
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput 
                scale='c'
                temperature={celsius}
                onTempChange={this.handleCelsiusChange}
                ></TemperatureInput>
                <TemperatureInput 
                scale='f'
                temperature={fahrenheit}
                onTempChange={this.handleFahrenheitChange}
                ></TemperatureInput>
                <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator></Calculator>,
    document.getElementById('Calculator')
);



function CalculatorTest(){
    return (
        <div id='Calculator1'></div>
    )
}
export default CalculatorTest;

function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog(){
    return(
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>
                欢迎
            </h1>
            <p className='Dialog-message'>
                感谢你游览到这里
            </p>
        </FancyBorder>
    );
}

function SplitPane(props){
    return (
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPane-right'>
                {props.right}
            </div>
        </div>
    );
}
