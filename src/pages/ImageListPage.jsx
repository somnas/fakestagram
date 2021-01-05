import React, {useState} from 'react'
import ImageItem from '../components/ImageItem'


export default function ImageListPage() {          
    const [imageList, setImageList] = useState([])

    function handleOnClick() {
        fetch("https://image-mock-data.firebaseio.com/images.json")
        .then(res => res.json())
        .then(data => setImageList(data))
    }
    return (
        <>
            <h2>Instagram</h2>
            <button onClick={handleOnClick} className="btn btn-primary">Load Data</button>
            <div className="row">
                {imageList.map(imageItem => {
                return <ImageItem key={imageItem.id} imageItem={imageItem} />
                })}
            </div>
            
        </>
    )
}
