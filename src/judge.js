import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props){
    return <h1>欢迎回来,lj</h1>
}

function GuestGreeting(props){
    const numbers = ['lj','zlq','sz'];
   /*  const listItems = numbers.map((item)=>
    <li key={item.toString()}>{item}</li>
    ); */
    return <div>
        <ul>{numbers.map((item)=>
            <li key={item.toString()} value={item}></li>
        )}</ul>
        <h1>亲，请登录</h1>
    </div> 
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting></UserGreeting>
    }
    return <GuestGreeting></GuestGreeting>
}

ReactDOM.render(
    <Greeting isLoggedIn = {false} />,
    document.getElementById('judge1')
)

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            登录
        </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>登出</button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('judge')
)

function JudgeTest(){
    return (
        <div></div>
    )
}

export default JudgeTest;