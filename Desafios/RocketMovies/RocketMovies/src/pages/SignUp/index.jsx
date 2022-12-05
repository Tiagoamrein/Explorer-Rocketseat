import {Container, Form, Background} from "./styles"
import {FiMail, FiLock, FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"


export function SignUp(){
  return(
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>
      <Input placeholder="Nome" type ="text" icon={FiMail}/>
      <Input placeholder="E-mail" type ="email" icon={FiMail}/>
      <Input placeholder="Senha" type ="password" icon={FiLock}/>

      <Button title="Cadastrar"/>

      <Link to="/SignIn"  className="Link">
        <FiArrowLeft/>
      Voltar para o login
      </Link>
      </Form>
      <Background/>
      
    </Container>
  )
}