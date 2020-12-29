import React from 'react'
import UserList from './UserList'

function App(){
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
    }
  ]

  const nextId = useRef(4)
  const onCreate = () => {
    
    nextId.current += 1
  }
  return(
    <UserList users = {users}/>
  )
}


export default App;
