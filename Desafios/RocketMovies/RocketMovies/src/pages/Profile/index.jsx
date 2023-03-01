import { useState } from "react"
import{Link} from "react-router-dom"

import {Container, Form, Avatar} from "./styles"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import {FiArrowLeft,FiMail, FiLock, FiUser, FiCamera} from "react-icons/fi"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Profile(){
  const { user, updateProfile } = useAuth();
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordold] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
        name,
        email,
        password: passwordNew,
        old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
}


  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }
  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft/>
        Voltar
        </Link>
        
        
      </header>

      <Form>
      <Avatar>
        <img src={avatar}/>
        
        <label htmlFor="avatar">
        <FiCamera/>
        <input type="file"  id="avatar" onChange={handleChangeAvatar} />
        </label>
        

      </Avatar>

      <Input placeholder= "Nome" type ="text" icon = {FiUser} value= {name} onChange={(e)=> setName(e.target.value)}/>

      <Input placeholder= "Email" type ="email" icon = {FiMail} value= {email} onChange={(e)=> setEmail(e.target.value)}/>

      <Input placeholder= "Senha atual" type ="password" icon = {FiLock} onChange={(e)=> setPasswordold(e.target.value)}/>

      <Input placeholder= "Nova senha" type ="password" icon = {FiLock} onChange={(e)=> setPasswordNew(e.target.value)}/>

      <Button title= "Salvar" onClick= {handleUpdate}/>
      </Form>
    </Container>
  )
}