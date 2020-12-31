import React, { useEffect } from 'react'

const User = React.memo(function User({user, onRemove, onToggle}) {
    useEffect(() => {
        console.log('user 값이 설정됨');
        return () => {
          console.log('user 가 바뀌기 전..');
        };
    }, [user]);//deps 파라미너를 생략하면 컴포넌트가 리렌더링 될 때 마다 호출됨
    return (
      <div>
        <b
            style = {{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick = {() => onToggle(user.id)}
        >
            {user.username}
        </b>
         <span>({user.email})</span>
        <button onClick = {() => onRemove(user.id)}>삭제</button>
      </div>
    )
  }
)
function UserList({users, onRemove, onToggle}){
    return(
        <div>
        {users.map((user, index) => 
            <User user = {user} key = {index} onRemove = {onRemove} onToggle = {onToggle}/>
        )}
        </div>
    )
}

export default React.memo(UserList);