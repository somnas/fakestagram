import React, {useRef, useState} from 'react'

export default function Comments() {
    const inputRef = useRef()
    const [commentList, addComment] = useState([]) 

    function handleOnClick() {
        const input = inputRef.current;
        if(input.value !== "") {
            addComment([...commentList, input.value]);
            input.value = "";
        }        
    }
        
    return (        
        <div>
            Comment List
            {commentList.map((comment, index) => {
              return <p key={index}>{comment}</p>  
            })}
            <input ref={inputRef} type="text"/>
            <button onClick={handleOnClick}
            className="btn btn-primary"
            >Send
            </button>
            
        </div>
    )
}
