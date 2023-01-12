import {RiShutDownLine} from "react-icons/ri"
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./style";



export function Header(){
  const {signOut} = useAuth()
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/tiagoamrein.png" alt="Foto do usuario" />

        <div>
          <span>Bem vindo,</span>
          <strong>Tiago Santos</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}