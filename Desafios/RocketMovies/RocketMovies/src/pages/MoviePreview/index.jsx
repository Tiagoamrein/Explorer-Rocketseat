import {Container} from "./styles"
import { Link } from "react-router-dom"
import {FiArrowLeft} from "react-icons/fi"
import { Header } from "../../components/Header"

export function MoviePreview(){

 return(
  <Container>
    <Header/>
     <Link to="/"  className="Link">
        <FiArrowLeft/>
      Voltar 
      </Link>
  </Container>
 )
}