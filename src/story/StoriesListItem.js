import React from 'react'

export const StoriesListItem = ({ story }) => {
    return (
        <div>
            <article className="card mb-4">
                <header className="card-header">
                    <div className="card-meta">
                        <div>{story.date}Date in tag</div>
                        <h4 className="card-title">{story.title}</h4>
                    </div>
                </header>


                <img className="card-img" src="/images/trip.jpg"></img>
                <div className="card-body">
                    <p className="card-text">
                        {story.text}
                    </p>
                </div>
            </article>
        </div>
    )
}
