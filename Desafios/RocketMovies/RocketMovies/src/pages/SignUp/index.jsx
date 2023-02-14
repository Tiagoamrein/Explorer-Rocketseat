import {Container, Form, Background} from "./styles"
import {FiMail, FiLock, FiArrowLeft} from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from '../../services/api'


export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail]= useState("")
  const [ password, setPassword]= useState("")
   const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email|| !password){
      alert("preencha todos os campos")
    }

    console.log(name, email, password)

    api.post('/users', { name, email, password})
    .then((resolve) => {
      console.log("RESOLVE", resolve)
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar')
      }
     
    })
  }

  return(
    <Container>
      <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Crie sua conta</h2>
      <Input placeholder="Nome" type ="text" icon={FiMail} onChange= {e => setName(e.target.value)} />
      <Input placeholder="E-mail" type ="email" icon={FiMail} onChange= {e => setEmail(e.target.value)}/>
      <Input placeholder="Senha" type ="password" icon={FiLock}onChange= {e => setPassword(e.target.value)}/>

      <Button title="Cadastrar" onClick={handleSignUp} />

      <Link to="/SignIn"  className="Link">
        <FiArrowLeft/>
      Voltar para o login
      </Link>
      </Form>
      <Background/>
      
    </Container>
  )
}