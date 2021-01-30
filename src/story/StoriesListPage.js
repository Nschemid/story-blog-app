import React from 'react'
import { AboutPage } from '../about/AboutPage';
import { StoriesList } from './StoriesList'
import { useResource } from '../data';

export const StoriesListPage = () => {

    const [stories] = useResource('/stories', []);
    //const { isLoading, stories } = useStories();

    return (

        <div className="container">
            <div className="row">
                {stories ?
                    (<div className="col-md-9">
                        <StoriesList
                            stories={stories}
                        ></StoriesList>
                    </div>)
                    : (<p>Loading...</p>)}
                <div className="col-md-3 ml-auto">

                    <aside className="sidebar">
                        <div className="card mb-4">
                            <AboutPage></AboutPage>
                        </div>
                    </aside>

                    <aside className="sidebar sidebar-sticky">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">Tags</h4>
                                <a className="btn btn-light btn-sm mb-1">Journey</a>
                                <a className="btn btn-light btn-sm mb-1">Coding</a>
                                <a className="btn btn-light btn-sm mb-1">Travel</a>
                                <a className="btn btn-light btn-sm mb-1">hackthon</a>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title"> Popular stories</h4>
                                <a className="d-inline-block">
                                    <h4 className="h6">The blind man</h4>
                                    <img className="card-img" src="/images/trip.jpg"></img>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
