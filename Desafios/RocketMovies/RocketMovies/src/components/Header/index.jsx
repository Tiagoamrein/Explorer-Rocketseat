import {Container,Profile} from "./styles"
import { Input } from "../Input"
import {useAuth} from "../../hooks/auth"

export function Header(){

  const {signOut} = useAuth()

  function handleSignIn() {
   
    signOut()
  }

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder= "Pesquisar pelo título"/>
      
      <div className="profile">
        <h2>Tiago Santos</h2>

      <button  onClick={handleSignIn}>sair</button>
        
      </div>
      <Profile to="/Profile">
        <img src="https://github.com/tiagoamrein.png" alt="Foto do usuario" /></Profile>
       
      
    </Container>
  )
}