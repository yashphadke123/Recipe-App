import React from 'react'
import Home from './home'
import Cuisine from './cuisine'
import {Route,Routes} from 'react-router-dom'
import Searched from './Searched'
import Recipe from './recipe'
function Pages() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cuisine/:type' element={<Cuisine/>}></Route>
        <Route path='/searched/:search' element={<Searched/>}></Route>
        <Route path='recipes/:id' element={<Recipe/>}></Route>
      </Routes>
  )
}

export default Pages