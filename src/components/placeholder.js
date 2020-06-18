import React from 'react'

function Placeholder(props) {
    return (
        <div className="placeholder d-flex justify-content-center align-items-center">
            <h3 className="page-name text-center">{props.title}</h3>
        </div>
    )
}

export default Placeholder;