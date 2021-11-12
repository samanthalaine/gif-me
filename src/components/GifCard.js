import React from 'react'

function GifCard({gif}) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={gif.images.fixed_height.url} alt="" className="w-full"/>
        <div className="px-6 py-3">
        <div className="font-bold text-blue-700 text-xl mb-2">
          {gif.title}
        </div>
        <ul>
          <li>
            <strong>Username: </strong>
            {gif.username !== "" ? gif.username : "Unknown"}
          </li>
          <li>
            <strong>Rating: </strong>
            {gif.rating}
          </li>
         
        </ul>
        </div>
        <div className="px-6 py-3">
          <span className="inline-block bg-gray-200 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
            {gif.import_datetime}
          </span>
        </div>
      </div>
    )
}

export default GifCard
