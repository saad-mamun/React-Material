import React from 'react'
import Button from "@mui/material/Button"
// import HomeIcon from "@mui/icons-material/Home"; kaj korche na
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Presentation from './Components/Presentation'
import Work from './Components/Work'
import Slider from './Components/Slider'
import Video from './Components/Video'
import BomArea from './Components/BomArea'
import Blog from './Components/Blog'


function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Presentation/>
    <Slider/>
    <Video/>
    <Work/>
    <BomArea/>
    <Blog/>
    </>
  )
}

export default App
