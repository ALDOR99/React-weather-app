import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const key = 'd53580f84f407e33d412dca4adc2ea09'
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`,
        )
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  }, [])
  return <div className="App">HELLO</div>
}

export default App
