import React from 'react'
import './App.css';

function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList(){
  const users = [
    {
      id: 1,
      username: 'boeun',
      email: 'public.boeun1'
    },
    {
      id: 2,
      username: 'boeu',
      email: 'public.boeun2'
    },
    {
      id: 3,
      username: 'boe',
      email: 'public.boeun3'
    },
    {
      id: 4,
      username: 'bo',
      email: 'public.boeun4'
    },
  ]

  return(
    <div>
      {users.map((user, index) => 
        <User user = {user} key = {index}/>
      )}
    </div>
  )
}


export default UserList;
