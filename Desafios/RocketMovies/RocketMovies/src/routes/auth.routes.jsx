import { Route, Routes } from "react-router-dom";

import {SignUp} from "../pages/SignUp"
import {SignIn} from "../pages/SignIn"

export function AuthRoutes(){

  return(
    <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}