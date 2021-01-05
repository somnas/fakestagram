import React from 'react'

export default function ImageItem({imageItem}) {
    return (
        <div className="col-md-6">
           <img className="img-fluid" src={imageItem.imageURL} alt=""/>
           <p>
               {imageItem.title}
               <br/>
               ♥️ {imageItem.likes}
           </p>
           <br/>
        </div>
    )
}
