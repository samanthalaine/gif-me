import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'

function CardDetail() {
    let {id} = useParams()
     const [details, setDetails] = useState({})
     console.log(details.user)
     
     
    
        useEffect(() => {
            setTimeout(() => fetchItem(), 300)
            
        }, [])
        const fetchItem = async () => {
            const fetchItem = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_KEY}`)
            const Item = await fetchItem.json(); 
            setDetails(Item.data)    
        }   
        if(Object.keys(details).length !== 0){
            return(
                <div>
                    <div >
               <div
                 avatar={
                     <div alt="?" src={details.user ? details.user.avatar_url: "Unknown"} />
                 }
                 action={
                   <button aria-label="settings">
                   </button>
                 }
                 title={details.title}
                 subheader={details.trending_datetime}
               />
               <img
                 
                 src={details.images.original.url}
                 title="gif"
               />
               <div>
                 <div className="cardDetails" variant="body2" color="textSecondary" component="p">
                   Username:{details.username}
                   <br></br>
                   Type:{details.type}
                   <br></br>
                   Rating:{details.rating}
                 </div>
               </div>
               </div>
                </div>
             )
        }
        else{
            return(
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
              </div>)
        }
}

export default CardDetail
