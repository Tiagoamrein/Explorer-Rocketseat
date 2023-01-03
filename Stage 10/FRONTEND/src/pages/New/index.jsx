import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Section} from "../../components/Section"
import {Textarea} from "../../components/Textarea"
import {NoteItem} from "../../components/NoteItem"
import {Button} from "../../components/Button"
import { Link } from "react-router-dom"

import { Container, Form } from "./styles";


export function New (){

  return(
    <Container>
    <Header/>
    <main>
      <Form>
        <header>
          <h1>Criar nota</h1>
          <Link to= "/">voltar </Link>
        </header>

        <Input placeholder = "Titulo"/>
        <Textarea placeholder = "Observações"/>
        <Section title="Links úteis">
        <NoteItem value= "https://www.rocketseat.com.br/"/>
        <NoteItem  placeholder= "Novo link" isNew/>
        </Section>
        
        <Section title="Marcadores">
        <div className="tags">
        <NoteItem value= "React"/>
        <NoteItem  placeholder= "Nova tag" isNew/>
        </div>
        </Section>
      <Button title="Salvar"/>
      </Form>
    </main>
      
    </Container>
  )
}