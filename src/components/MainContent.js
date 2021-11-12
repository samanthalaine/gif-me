import React from 'react'
import GifCard from "./GifCard"

function MainContent({gifs}) {
    return (
      <div className="bg-gray-900">
        <div className="container mx-auto ">
          <div className="grid grid-cols-3 gap-7">
            {gifs.map((gif) => (
              <GifCard gif={gif} />
            ))}
          </div>
        </div>
        </div>
    )
}

export default MainContent
