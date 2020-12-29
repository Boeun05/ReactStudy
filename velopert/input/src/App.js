import React, {useRef, useState} from 'react'
import CreateUser from './CreateUser'
import UserList from './UserList'

function App(){
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const {username, email} = inputs

  const onChange = (e) => {
    const  {name, value} = e.target
    setInputs({
      ...inputs,
      [name] :value
    })
  }
  const [users, setUsers] = useState([
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
  ])

  const nextId = useRef(4)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users,user])
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return(
    <>
      <CreateUser
        username = {username}
        email = {email}
        onChange = {onChange}
        onCreate = {onCreate}
      />
      <UserList users = {users} onRemove = {onRemove}/>
    </>
  )
}


export default App;
