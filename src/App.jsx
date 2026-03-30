import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/Stats'
import Steps from './component/Steps/Steps'

function App() {

  return (
    <>
      <div className="m-[1%]">
        <Navbar/>
        <Banner/>
        <Stats/>
        <Steps/>
      </div>
    </>
  )
}

export default App
