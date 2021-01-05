import React, {useState} from 'react'
import Comments from './Comments'

export default function ImageItem({imageItem}) {

    const [likes, setLikes] = useState(imageItem.likes)

    function handleOnClick() {
        setLikes(prevLikes => prevLikes + 1)
    }

    return (
        <div className="col-md-6">
           <img className="img-fluid" 
           onDoubleClick={handleOnClick}
            src={imageItem.imageURL}
            alt={imageItem.description}
            />
           <p>
               {imageItem.title}
               <br/>
               ♥️ {likes}
           </p>
           <Comments />
           <br/>
        </div>
    )
}
