import React from "react";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


import { Container, Links } from "./styles";
export function Details(){

  return (
    <Container>
    <Header/>
    <Section title = "Links úteis">
      <Links>
      
        <li>
          <a href="&">https://www.rocketseat.com.br/</a>  
        </li>
        <li>
          <a href="&">https://www.rocketseat.com.br/</a>  
        </li>

      
      </Links>
    </Section>

    <Section title = "Marcadores">

    <Tag title = "Node"/>
    <Tag title = "Express"/>
    
    </Section>
    
    <Button title="voltar"/>
    </Container>
    
  )
}