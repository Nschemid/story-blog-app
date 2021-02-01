import React from 'react'
import { MyStoriesPageListItem } from './MyStoriesPageListItem'
import { NewStoryButton } from './NewStoryButton'

export const MyStoriesPageList = ({ stories }) => {
    console.log(stories);
    return (
        <div className="row">
            {stories.map(story => (
                <MyStoriesPageListItem
                    key={story._id}
                    story={story}>
                </MyStoriesPageListItem>
            ))}
            <NewStoryButton></NewStoryButton>
        </div>
    )
}
