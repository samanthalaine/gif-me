import React from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

function GifCard({ gif }) {
  // //date object example: (10/21/2021, 3:58:47 PM)
  // //splits date object into array, then returns first element of that array
  let date = Moment(gif.import_datetime).format("MM/DD/YYYY, hh:mm:ss");
  date = date.split(",")[0];
  console.log(date);

  return (
    <Link
      class="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      to={`/gif/${gif.id}`}
    >
      <div>
        <img
          class="w-full"
          src={gif.images.fixed_width.url}
          alt=""
          className="w-full"
        />

        <div className="px-6 py-3 bg-white">
          <div className="font-bold text-blue-700 text-xl mb-2">
            {gif.title}
          </div>
          <span className="inline-block bg-green-300 rounded full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
            Date Posted: {date}
          </span>
          <ul>
            
            <li className="py-1">
              <strong>Posted by: </strong>
              {gif.username !== "" ? gif.username : "Unknown"}
            </li>
            <li>
              <h1 className="text-gray-600">Click for more details </h1>
            </li>
          </ul>
        </div>
        <div className="px-6 py-3 bg-white"></div>
      </div>
    </Link>
  );
}

export default GifCard;
