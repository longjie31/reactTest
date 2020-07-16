import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todolistItem'
class TodoList extends React.Component{
    
    constructor(props){
        // super进行初始化
        super(props);
        // state是组件里数据存放的位置；
        this.state = {
            list:[
                '学习react',
                '学习英语'
            ],
            inputValue:''
        }
        this.handelBtnClick = this.handelBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handelBtnClick(){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        });
    }
    handleInputChange(e){
        console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })
    }
    handleItemClick(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list
        });
    }

    handleDelete(index){
        console.log('删除');
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list
        });
    }

    getTodoItems(){
        return(
                this.state.list.map((item,index)=>{
                    return <TodoItem delete={this.handleDelete} content={item} key={index} index={index}></TodoItem>
                // return <li key={index} onClick={this.handleItemClick(index)}>{item}</li>
                })
        )
    }
    render(){
        return(
            <div>
                <div>
                <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handelBtnClick}>增加</button>
                </div>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<TodoList></TodoList>,document.getElementById('todolist'))
export default TodoList;