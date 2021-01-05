import React, {useState, useEffect} from 'react'
import ImageItem from '../components/ImageItem'


export default function ImageListPage() {          
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        fetch("https://image-mock-data.firebaseio.com/images.json")
        .then(res => res.json())
        .then(data => setImageList(data))
    },[])

    return (
        <>
            <h2>Instagram</h2>            
            <div className="row">
                {imageList.map(imageItem => {
                return <ImageItem key={imageItem.id} imageItem={imageItem} />
                })}
            </div>
            
        </>
    )
}
