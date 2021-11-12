import React from 'react'
import { Link } from "react-router-dom";

function GifCard({gif}) {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <Link to={`/gif/${gif.id}`}><img class="w-full" src={gif.images.fixed_width.url} alt="" className="w-full"/></Link>
        <div className="px-6 py-3 bg-white">
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
        <div className="px-6 py-3 bg-white">
          <span className="inline-block bg-green-300 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
            {gif.import_datetime}
          </span>
        </div>
      </div>
    )
}

export default GifCard
