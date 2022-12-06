import { Header } from "../../components/Header";
import {FiArrowLeft} from "react-icons/fi"
import { Container,Input } from "./styles";
import { Link } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
export function NewMovie(){
  return(
    <Container>
      <Header/>
      <Link to="/"  className="Link">
        <FiArrowLeft/>
      Voltar 
      </Link>
      <h1>Novo filme</h1>
      <section>
      <main>
        <div className="inputs">
        <Input placeholder="Título"/>
        <Input placeholder="Sua nota (de 0 a 5)"/>
        </div>
        <Textarea placeholder="Observações"/>

        <h2>Marcadores</h2>
      </main></section>
    </Container>
  )
}