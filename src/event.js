import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        // 为了在回调中使用this，这个绑定必不可少
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'开':'关'}
            </button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('event')
)
function EventTest(){
    return (
        <div></div>
    )
}

export default EventTest;