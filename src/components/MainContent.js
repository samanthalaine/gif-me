import React from 'react'
import GifCard from "./GifCard"

function MainContent({gifs}) {
    return (
      <div className="bg-gray-900">
        <div className="container mx-auto ">
          <div className="sm:grid grid-cols-1 md:grid grid-cols-3 gap-7">
            {gifs.map((gif) => (
              <GifCard gif={gif} key={gif.id} />
            ))}
          </div>
        </div>
        </div>
    )
}

export default MainContent
