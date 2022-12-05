import {Container, NewMovie, Title} from "./styles"
import {FiPlus} from "react-icons/fi"
import { Header } from "../../components/Header"
import { Movies } from "../../components/Movies"
import { Button } from "../../components/Button"

export function Home(){
  return(
    <Container>
      <Header/>
      
      <Title>
        <h1>Meus filmes</h1>
        <NewMovie >
          
        <FiPlus/>
        Adicionar   filme
        </NewMovie>
    
    </Title>
    <main>
    <Movies/>
    <Movies/>
    <Movies/>
      
      </main>
    </Container>
  )
}