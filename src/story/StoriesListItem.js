import React from 'react'
import {Link} from 'react-router-dom';

export const StoriesListItem = ({ story }) => {
    return (
        <Link to={`/stories/${story._id}`}>
        <div>
            <article className="card mb-4">
                <header className="card-header text-center">
                    <div className="card-meta">
                        <div>{story.date}Date in tag</div>
                        <h4 className="card-title">{story.title}</h4>
                    </div>
                </header>


                <img className="card-img" src={story.url}></img>
                <div className="card-body">
                    <p className="card-text">
                        {story.text}
                    </p>
                </div>
            </article>
        </div>
        </Link>
    )
}
