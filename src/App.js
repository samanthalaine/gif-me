import { useState, useEffect } from 'react'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const fetchGifs = async () =>{
      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=25&rating=g`)
      const data = await res.json()
      setGifs(data)
    }
    fetchGifs()
  }, [])


  return (
    <div className="text-3xl">
    <h1>hello world</h1>
    </div>
  );
}

export default App;
