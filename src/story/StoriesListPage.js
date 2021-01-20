import React from 'react'
import { StoriesList } from './StoriesList'
import { useStories } from './useStories'

export const StoriesListPage = () => {
    const { isLoading, stories } = useStories();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <StoriesList
                        isLoading={isLoading}
                        stories={stories}
                    ></StoriesList>
                </div>
                <div className="col-md-3 ml-auto">
                    <aside className="sidebar"></aside>
                    /**/
                    <aside className="sidebar sidebar-sticky">
                        <div className="card mb-4"></div>
                        <div className="card mb-4"></div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
