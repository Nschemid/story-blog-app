import React from 'react'
import { StoriesListItem } from './StoriesListItem'
import { StoryPage } from './StoryPage'

export const StoriesList = ({ isLoading, stories }) => {
    return (
        isLoading ? <p>Loading...</p>
            :
            stories.map(story => (
                <StoriesListItem
                    key={story._id}
                    story={story}>
                </StoriesListItem>


            ))

    )
}
