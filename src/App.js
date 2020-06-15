import React from 'react';
import logo from './logo.svg';
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
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
