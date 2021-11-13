import React from "react";
import { Link } from "react-router-dom";


function GifCard({ gif }) {
  let date = new Date(gif.import_datetime);
  let formatDate = date.toLocaleString("en-us");
  //date object example: (10/21/2021, 3:58:47 PM)
  //splits date object into array, then returns first element of that array
  formatDate = formatDate.split(",")[0];
  console.log(formatDate);

  return (
    <Link class="max-w-sm rounded overflow-hidden shadow-lg bg-white" to={`/gif/${gif.id}`}>
    <div >
      
        <img
          class="w-full"
          src={gif.images.fixed_width.url}
          alt=""
          className="w-full"
        />
      
      <div className="px-6 py-3 bg-white">
        <div className="font-bold text-blue-700 text-xl mb-2">{gif.title}</div>
        <ul>
          <li>
            <strong>Posted by: </strong>
            {gif.username !== "" ? gif.username : "Unknown"}
          </li>
        </ul>
      </div>
      <div className="px-6 py-3 bg-white">
        <span className="inline-block bg-green-300 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          Posted on: {formatDate}
        </span>
      </div>
    </div>
    </Link>
  );
}

export default GifCard;
