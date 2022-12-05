import { Container } from "./styles";
import {Rating} from "../Rating"
import { Tag } from "../Tag";


export function Movies(){

  return(
    <Container>
    <h1>Interestellar</h1>
    <Rating/>
    <p>
      Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
      Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
      fantasma que tenta se...</p>
      <Tag title="Ficção Científica"/>
      <Tag title="Drama"/>
      <Tag title="Família"/>
    </Container>
  )
}