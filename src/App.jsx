import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'

function App() {

  return (
    <>
      <div className="m-[1%]">
        <Navbar/>
        <Banner/>
      </div>
    </>
  )
}

export default App
