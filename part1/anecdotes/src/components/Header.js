import React from 'react'

const Header = (props) => {
    console.log("Props from Header :: ", props);
    return (
        <h1>{props.course}</h1>
    )
}

export default Header