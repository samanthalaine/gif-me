import { useState, useEffect } from 'react'
import GifCard from './components/GifCard'
import Navbar from './components/Navbar'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const fetchGifs = async () =>{
      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=21&rating=pg`)
      const data = await res.json()
      setGifs(data.data)
      console.log(data.data)
    }
    fetchGifs()
  }, [])


  return (
    <div className="bg-gray-900">
      <Navbar/>
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-7">
      {gifs.map((gif)=>(
        <GifCard gif={gif}/>
      ))}
      </div>
    </div>
    </div>
  );
}

export default App;
