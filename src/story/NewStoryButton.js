import React from 'react'
import { Link } from 'react-router-dom'

export const NewStoryButton = () => {
    return (
        <div className="col-sm-6">
        <Link className = "link" to= "/upload-story">
            <div className= "new-story-button"> 
            <i className="far fa-plus-square fa-4x" ></i>
            </div>
        </Link>
        </div>
    )
}
