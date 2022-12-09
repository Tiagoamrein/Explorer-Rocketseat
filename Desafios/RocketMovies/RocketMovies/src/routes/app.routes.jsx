import { Route, Routes } from "react-router-dom";

import {NewMovie} from "../pages/NewMovie"
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import {MoviePreview} from "../pages/MoviePreview"

export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/NewMovie" element={<NewMovie/>}/>
      <Route path="/MoviePreview" element={<MoviePreview/>}/>
    </Routes>
  )
}