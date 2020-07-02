import React,{useState, useEffect} from 'react';
function Example(){
    //声明一个新的叫做count的state变量
    const [count,setCount] = useState(0);
    // 相当于componentDidMount和componentDidUpdate
    useEffect(()=>{
        //使用浏览器的api更新页面标题
        document.title = `俺点击了${count}次呀`;
    })
    return(
        <div>
            <p>俺点击了{count}次</p>
            <button onClick={()=>setCount(count+1)}>点我,快点我</button>
        </div>
    );
}

/* function FriendStatus(props){
    const [isOnline,seIsOnline] = useState(null);
    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }
    useEffect(()=>{
        ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange);
        return()=>{
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatusChange);
        };
    });

    if(isOnline===null){
        return '加载中...';
    }
    return isOnline?'在线':'不在线';
} */

function ExampleWithManyStates() {
    //声明多个state变量
    const [age, setAge] = useState(18);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{
        text: '学习hooks'
    }]);
}

function useFriendStatus(friendID){
    const [isOnline,setIsOnline] = useState(null);
    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }

    useEffect(()=>{
        ChatAPI.subscribeToFriendStatus(friendID,handleStatusChange);
        return ()=>{
            ChatAPI.unsubscribeFromFriendStatus(friendID,handleStatusChange);
        };
    });

    return isOnline;
}

function FriendStatus(props){
    const isOnline = useFriendStatus(props.friend.id);
    
    if(isOnline===null){
        return 'Loading...';
    }
    return isOnline?'在线':'离线';
}

function FriendListItem(props){
    const isOnline = useFriendStatus(props.friend.id);
    
    return(
        <li style={{color:isOnline?'green':'red'}}>
            {props.friend.name}
        </li>
    )
}