import { useState, useEffect } from "react";
import GifCard from "./components/GifCard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import MainContent from "./components/MainContent";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=21&rating=pg`
      );
      const data = await res.json();
      setGifs(data.data);
      console.log(data.data);
    };
    fetchGifs();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        <Navbar />
        <MainContent gifs={gifs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
