import React from 'react'
import { useResource } from '../data';
import { MyStoriesPageList } from './MyStoriesPageList'

export const MyStoriesPage = () => {

    const [stories] = useResource('/stories', []);

    return (
        <div className="container">
            {stories ?
                (
                    <MyStoriesPageList
                        stories={stories}
                    ></MyStoriesPageList>
                )
                : (<p>Loading...</p>)}
        </div>
    )
}

