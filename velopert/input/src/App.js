import React, {useState} from 'react'
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    name: '보은',
    nickname: '송'
  })

  

  const {name, nickname} = inputs
  
  

  const onChange = (e) => {
    const {value, name} = e.target
    
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs)
    
  }
  
  
  

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
  }

  return (
    <div>
      <input name="name" placeholder='이름' onChange = {onChange} value = {name}/>
      <input name="nickname" placeholder='닉네임' onChange = {onChange} value = {nickname}/>
      <button onClick = {onReset}>초기화</button>
      <div>
        <b>값</b>
          {name}({nickname})
      </div>
    </div>
  )
}


export default App;
