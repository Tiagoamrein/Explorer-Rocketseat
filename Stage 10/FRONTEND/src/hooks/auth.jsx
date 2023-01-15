import { createContext, useContext, useState, useEffect } from "react";
import { json } from "react-router-dom";
import { api } from "../services/api";

 const AuthContext = createContext({})

 function AuthProvider({children}) {
    const [data, setData]= useState({})

  async function signIn({email, password}){

    try{
      const response  = await api.post("/sessions", {email, password})
      const {user, token} = response.data

      localStorage.setItem("@rocketnote:user", JSON.stringify(user))
      localStorage.setItem("@rocketnote:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({user, token})

      
    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel entrar.")
      }

    }
  }
  
  function signOut(){
    const token = localStorage.removeItem("@rocketnote:token")
    const user = localStorage.removeItem("@rocketnote:user")
    

    setData({})

  }

   async function updateProfile ({user}){
    try {

      await api.put("/users", user)
      localStorage.setItem("@rocketnote:user", JSON.stringify(user))

      setData({user, token: data.token})
      alert("Perfil atualizado")
      
    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel atualizar.")
      }

    }

   }
  useEffect(() =>{
    const token = localStorage.getItem("@rocketnote:token")
    const user = localStorage.getItem("@rocketnote:user")

    if(token && user){
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  },[])

  return(
    <AuthContext.Provider value={{signIn, user: data.user,signOut, updateProfile}}>
      {children}
    </AuthContext.Provider>
  )

 }

 function useAuth(){
  const context = useContext(AuthContext)
  
  return context

 }

 export {AuthProvider, useAuth}