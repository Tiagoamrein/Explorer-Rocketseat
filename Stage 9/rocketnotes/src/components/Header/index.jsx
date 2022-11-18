import {RiShutDownLine} from "react-icons/ri"
import { Container, Profile, Logout } from "./style";

export function Header(){

  return(
    <Container>
      <Profile>
        <img src="https://github.com/tiagoamrein.png" alt="Foto do usuario" />

        <div>
          <span>Bem vindo,</span>
          <strong>Tiago Santos</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}