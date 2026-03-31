import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/Stats'
import Steps from './component/Steps/Steps'
import Main from './component/Main/main'
import Pricing from './component/Pricing/Pricing'

const mainData = fetch('/mainData.json').then(res => res.json())
const pricingData = fetch('/pricingData.json').then(res => res.json())

function App() {
  const [addedNumber, setAddedNumber] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [active, setActive] = useState(true)
  return (
    <>
      <div className="m-[3%]">
        <Navbar addedNumber={addedNumber} setAddedNumber={setAddedNumber} />
        <Pricing pricingData={pricingData} />
        <Banner/>
        <Stats/>
        <Main active={active} setActive={setActive} totalPrice={totalPrice} setTotalPrice={setTotalPrice} addedNumber={addedNumber} setAddedNumber={setAddedNumber} mainData={mainData} />
        <Steps/>
      </div>
    </>
  )
}

export default App
