import React from 'react'
import { useState, useEffect } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
    const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=20&offset=0&q=`;
  
  const searchGif = () => {
    if(search.length > 0){
      setLoadingState(true);
      fetch(GIPHY_API+search)
      .then((res)=>{
        setLoadingState(false);
        return res.json();
      })
      .then((result)=>{
        console.log(result);
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
    }
  }


  return (
    <div>
      <div class="w-full max-w-sm">
        <div class="flex items-center py-2">
          <input 
            type="text" 
            placeholder="Search GIFs"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
          <button 
          onClick={searchGif}
          class="flex-shrink-0 bg-gray-900 hover:bg-green-500 border-gray-900 hover:border-green-500 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {
          (loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="sm:grid grid-cols-1 md:grid grid-cols-3 gap-7">
              {
                gifs.map((gif)=>{
                  return (
                    <div >
                      <img src={gif}/>  
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Search
