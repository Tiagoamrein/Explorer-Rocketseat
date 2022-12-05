import {Container,Profile} from "./styles"
import { Input } from "../Input"

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder= "Pesquisar pelo título"/>
      
      <div className="profile">
        <h2>Tiago Santos</h2>
        <p>Sair</p>
        
      </div>
      <Profile to="/Profile">
        <img src="https://github.com/tiagoamrein.png" alt="Foto do usuario" /></Profile>
       
      
    </Container>
  )
}