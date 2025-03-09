import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Exchange from './Components/Exchange'
import Bacdeb from './Components/Bacdeb'
import Video from './Components/Video'
import Buy from './Components/Buy'
import Trading from './Components/Trading'
import Email from './Components/Email'
import Slider from './Components/Slider'
import Slider2 from './Components/Slider2'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Slider/>
      {/* <Payment/> */}
      <Exchange/>
      <Bacdeb/>
      <Slider2/>
      <Video/>
      <Buy/>
      <Trading/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default App