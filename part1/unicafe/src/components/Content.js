import React from 'react'

import Part from "./Part";
const Content = (props) => {
    console.log("Part props :: ", props.parts[0])
    return (
    <>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>  
        <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </>
    )
}

export default Content;