import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from 'moment';

function CardDetail() {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  
  let date = Moment(details.import_datetime).format('MM/DD/YYYY, hh:mm:ss')
  date = date.split(",")[0]
  console.log(date)


  useEffect(() => {
    setTimeout(() => fetchItem(), 300);
  }, []);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_KEY}`
    );
    const Item = await fetchItem.json();
    setDetails(Item.data);
  };
  if (Object.keys(details).length !== 0) {
    return (
      <div className="">
        <div className="max-w-sm px-6 py-3 rounded overflow-hidden shadow-lg">
          <div
            avatar={
              <div
                alt="?"
                src={details.user ? details.user.avatar_url : "Unknown"}
              />
            }
            action={<button aria-label="settings"></button>}
            title={details.title}
            subheader={details.trending_datetime}
          />
          <img src={details.images.original.url} title="gif" />
          <div>
            <ul className="">
              <li className="text-xl font-bold text-blue-800">
                {details.title}
              </li>
              <li >
                <strong className="font-bold text-purple-500">Date Posted: </strong>
                {date}
              </li>
              <li>
                <strong className="font-bold text-purple-500">Username: </strong>
                {details.username === "" ? "Unknown" : details.username }
              </li>
              <li>
                <strong className="font-bold text-purple-500">Type: </strong>
                {details.type}
              </li>
              <li>
                <strong className="font-bold text-purple-500">Rating: </strong>
                {details.rating.toUpperCase()}
              </li>
              <li>
                <strong className="font-bold text-purple-500">Source: </strong>
                {details.source === "" ? "Unknown" : <a className="text-blue-600" href={details.source}>{details.source}</a>}
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex justify-center items-center">
        <div
          class="
                    animate-spin
                    rounded-full
                    h-32
                    w-32
                    border-t-2 border-b-2 border-purple-500
                  "
        ></div>
      </div>
    );
  }
}

export default CardDetail;
