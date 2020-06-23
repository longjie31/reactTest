import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

function formatName(data){
    return data.man+ 'and' + data.woman;
}
function Welcome(props){
return <h1>hello,{props.name}</h1>
}
const user = {
    man:'Lj',
    woman:'Zlq'
}
/* function Clock(props){
    return (
        <div>
            <h2>你好，lj</h2>
    <h3>现在时间是：{props.data.toLocaleTimeString()}。</h3>
        </div>
    )
}
function tick(){
    ReactDOM.render(
        <Clock data={new Date()} />,
        document.getElementById('clock')
    );
}
setInterval(tick,1000); */


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            data:new Date()
        })
    }

    render(){
        return(
            <div>
                <h2>你好，lj</h2>
                <h3>现在时间是：{this.state.data.toLocaleTimeString()}。</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className={user.man}>
          pojun welcome react
            hello，{formatName(user)}
        </div>
        <h2>
            现在是：{new Date().toLocaleTimeString()}
        </h2>
        <Welcome name="lj"/>
      </header>
    </div>
  );
}

export default App;
