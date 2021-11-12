import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Upload from "./components/Upload";
import CardDetail from "./components/CardDetail";
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
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<MainContent gifs={gifs} />} />
        <Route path="search/*" element={<Search />} />
        <Route path="upload/*" element={<Upload />} />
        <Route path="/gif/:id*" element={<CardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
