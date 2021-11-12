import React from 'react'
import GifCard from "./GifCard"

function MainContent({gifs}) {
    return (
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 gap-7">
            {gifs.map((gif) => (
              <GifCard gif={gif} />
            ))}
          </div>
        </div>
    )
}

export default MainContent
