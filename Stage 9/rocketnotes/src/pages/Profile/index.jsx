import {Container, Form} from "./styles"
import {FiArrowLeft,FiMail, FiLock, FiUser} from "react-icons/fi"
import {Input} from "../../components/Input"
export function Profile(){

  return(
    <Container>
      <header>
        <a href="/">
        <FiArrowLeft/>
        </a>
      </header>

      <Form>
      <Input placeholder= "Nome" type ="text" icon = {FiUser}/>
      </Form>
    </Container>
  )
}