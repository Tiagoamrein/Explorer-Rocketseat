import { Header } from "../../components/Header";
import { Container,Input } from "./styles";
import {FiArrowLeft} from "react-icons/fi"
import { Link } from "react-router-dom";
import {TagItem} from "../../components/TagItem"
import { Button } from "../../components/Button";

import { Textarea } from "../../components/Textarea";
export function NewMovie(...rest){
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
        <select  {...rest} onChange={e => setRating(e.target.value)}>
        <option value="" disabled selected>Sua nota(de 0 a 5)</option>
                <option value="0">0</option>
                <option value="2">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
        </select>
        
        </div>
        <Textarea placeholder="Observações"/>

        <h2>Marcadores</h2>
        <div className="tags">
        <TagItem value="React"/>
        <TagItem value="Novo marcador" isNew/>
        <section>
        <Button title="Excluir filme"/>
        <Button title="Salvar alterações"/>
        </section>
       
        </div>
      </main>
      </section>
    </Container>
  )
}