import {Container, NewMovie, Title} from "./styles"
import {FiPlus} from "react-icons/fi"
import { Header } from "../../components/Header"
import { Movies } from "../../components/Movies"

import { Link } from "react-router-dom"
export function Home(){
  return(
    <Container>
      <Header/>
      
      <Title>
        <h1>Meus filmes</h1>
        
        <NewMovie  to="/NewMovie">
          
        <FiPlus/>
        Adicionar   filme
        </NewMovie>
    
    </Title>
    <main>
    <Link to= "/MoviePreview">
    <Movies/>
    <Movies/>
    <Movies/>
     </Link> 
      </main>
    </Container>
  )
}