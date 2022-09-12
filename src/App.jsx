import { useEffect, useState } from 'react'
import './App.css'
import Weather from './componentes/Weather'



function App() {

 const [coords, setCoords] = useState()
 const [urlImg, setUrlImg] = useState()


 useEffect(()=>{

  const success = pos =>{

    const latlon={
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(latlon)
  }
  navigator.geolocation.getCurrentPosition(success)

 },[])

  return (
    <div  className={`App ${urlImg}`} > 
      <Weather coords={coords} setUrlImg={setUrlImg}/>
    </div>
    
  )
}

export default App

