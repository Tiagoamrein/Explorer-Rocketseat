import { useState } from "react"
import {Container, Form, Avatar} from "./styles"
import {FiArrowLeft,FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"
import {Input} from "../../components/Input"
import{Link} from "react-router-dom"
import {Button} from "../../components/Button"
import { useAuth } from "../../hooks/auth"
export function Profile(){

const {user} = useAuth() 

const [name, setName] = useState(user.name)
const [email, setEmail] = useState(user.email)
const [passwordold, setPasswordold] = useState()
const [passwordNew, setPasswordNew] = useState()

  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft/>
        </Link>
        
        
      </header>

      <Form>
      <Avatar>
        <img src="https://github.com/tiagoamrein.png" alt="foto do usuario"  />
        
        <label htmlFor="avatar">
        <FiCamera/>
        <input type="file"  id="avatar" />
        </label>
        

      </Avatar>

      <Input placeholder= "Nome" type ="text" icon = {FiUser} value={name} onChange={ e => setName(e.target.value)}/>

      <Input placeholder= "Email" type ="email" icon = {FiMail} value={email} onChange={ e => setEmail(e.target.value)}/>

      <Input placeholder= "Senha atual" type ="password" icon = {FiLock} autoComplete="true" onChange={ e => setPasswordNew(e.target.value)}/>

      <Input placeholder= "Nova senha" type ="password" icon = {FiLock} autoComplete="true" onChange={ e => setPasswordold(e.target.value)}/>

      <Button title= "Salvar"/>
      </Form>
    </Container>
  )
}