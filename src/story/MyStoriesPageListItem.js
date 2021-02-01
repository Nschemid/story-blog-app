import React from 'react'

export const MyStoriesPageListItem = ({ story }) => {
    console.log(story)
    return (
        <div className="col-sm-6">
            <div className="card" style={{ width: "18" }}>
                <img src={story.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{story.title}</h5>
                    <p className="card-text">{story.text}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>


    )
}
