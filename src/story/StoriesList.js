import React from 'react'
import { StoriesListItem } from './StoriesListItem'
import { StoryPage } from './StoryPage'

export const StoriesList = ({ stories }) => {
    console.log(stories);
    return (
        stories.map(story => (
            <StoriesListItem
                key={story._id}
                story={story}>
            </StoriesListItem>
        ))
    )
}
