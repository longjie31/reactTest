import React from 'react';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handelDelete = this.handelDelete.bind(this);
    }
    handelDelete(){
        console.log(this.props.index);
        this.props.delete(this.props.index);
    }
    render(){
        return (
        <div onClick={this.handelDelete}>{this.props.content}</div>
        )
    }
}
export default TodoItem