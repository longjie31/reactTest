import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            textarea:'文本域的值哦',
            select: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.textareaHandleChange = this.textareaHandleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }
    textareaHandleChange(event){
        this.setState({textarea:event.target.value});
    }
    handleSelect(event){
        this.setState({select:event.target.value});
    }
    handleSubmit(event){
        alert('你的名字是:' + this.state.value +'文本域值：'+this.state.textarea+'水果是'+this.state.select);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    你的名字：
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    文本域值：
                    <textarea value={this.state.textarea} onChange={this.textareaHandleChange}></textarea>
                </label>
                <label>
                    喜欢的水果：
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option value='grapefruit'>葡萄柚</option>
                        <option value='lime'>酸橙</option>
                        <option value='coconut'>椰子</option>
                        <option value='mango'>芒果</option>
                    </select>
                </label>
                <button type='submit'>提交哦</button>
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm></NameForm>,
    document.getElementById('nameForm')
);
function FormTest(){
    return (
        <div></div>
    )
}
export default FormTest;