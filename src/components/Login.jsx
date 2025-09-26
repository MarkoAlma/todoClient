import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export const Login = ({setIsLoggedIn}) => {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(user, pass);
        import.meta.env.VITE_USERNAME==user && import.meta.env.VITE_PASSWORD==pass ? setIsLoggedIn(true) : (setIsLoggedIn(false))
        document.querySelector('.paradicsom').style.display="block"
        
    }

  return (
    <div style={{maxWidth:'800px', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto', textAlign:'center', padding:'10px', boxShadow:'1px 1px 5px 1px lightgray', borderRadius:'10px'}}>

    <Form>
    <h3>LOGIN</h3>
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="text"
        placeholder="Username"
        type="text"
        value={user}
        onChange={(e)=>setUser(e.target.value)}
      />
      <Label for="exampleEmail">
        Username
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    <p className='paradicsom' style={{color:'red', display:'none'}}>Wrong Username/Password!</p>
    {' '}
    <Button onClick={handleSubmit}>
      Login
    </Button>
  </Form>
    </div>
  )
}