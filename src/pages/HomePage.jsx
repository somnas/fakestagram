import React from 'react'

export default function HomePage(props) {
    return (
        <>
           <h2>Welcome</h2> 
           <p>{props.greeting}</p>
        </>
    )
}
