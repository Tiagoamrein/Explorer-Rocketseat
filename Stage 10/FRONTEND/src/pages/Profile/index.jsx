import {Container, Form, Avatar} from "./styles"
import {FiArrowLeft,FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"
import {Input} from "../../components/Input"
import{Link} from "react-router-dom"
import {Button} from "../../components/Button"
export function Profile(){

  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft/>
        </Link>
        
        
      </header>

      <Form>
      <Avatar>
        <img src="https://github.com/tiagoamrein.png" alt="" srcset="" />
        
        <label htmlFor="avatar">
        <FiCamera/>
        <input type="file"  id="avatar" />
        </label>
        

      </Avatar>

      <Input placeholder= "Nome" type ="text" icon = {FiUser}/>

      <Input placeholder= "Email" type ="email" icon = {FiMail}/>

      <Input placeholder= "Senha atual" type ="password" icon = {FiLock}/>

      <Input placeholder= "Nova senha" type ="password" icon = {FiLock}/>

      <Button title= "Salvar"/>
      </Form>
    </Container>
  )
}