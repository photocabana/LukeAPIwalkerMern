import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react'
import './App.css'
import Form from "./components/Form"
import { BrowseRouter, Routes, Route, Link } from "react-router-dom"
import People from "./components/People"
import Planets from "./components/Planets"

function App() {
  //capture on App level so it carries throughout the project
  const [peopleOrPlanet, setPeopleOrPlanet] = useState("")
  const [id, setId] = useState("")
  return (
    <>
      <BrowseRouter>
        <Routes>
          <Route path='/' element={ <Form peopleOrPlanet={peopleOrPlanet} id={id} setPeopleOrPlanet={setPeopleOrPlanet} setId={setId}/> }/>
          <Route path="/People/:id" element={ <People peopleOrPlanet={peopleOrPlanet} id={id}/> }/>
          <Route path="/Planets/:id" element={ <Planets/> }/>
        </Routes>
      </BrowseRouter>
    </>

  )
}

export default App