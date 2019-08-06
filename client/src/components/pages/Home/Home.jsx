import React from 'react';

function Home() {
    return (
        <div>
            <div className="column">
                <div className="hero bg-gray">
                    <div className="hero-body">
                        <h1>Hire a Chef!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column col-6">
                            <div className="tile">
                            <div className="tile-icon">
                                    <figure className="avatar avatar-lg flex-centered">
                                    <i className="icon icon-people centered"></i>
                                    </figure>
                                </div>                                <div className="tile-content">
                                    <p className="tile-title">Be a guest in your own home! Hire a Chef today!</p>
                                    <p className="tile-subtitle">Sign up and search through a collection of local chef's, their menu's, and current availability!</p>
                                </div>
                                <div className="title-action">
                                    <button className="btn btn-primary">Guest Sign up</button>
                                </div>
                            </div>
                        </div>
                        <div className="column col-6">
                        <div className="tile">
                                <div className="tile-icon">
                                    <figure className="avatar avatar-lg flex-centered">
                                    <i className="icon icon-people centered"></i>
                                    </figure>
                                </div>
                                <div className="tile-content">
                                    <p className="tile-title">Become a Chef today!</p>
                                    <p className="tile-subtitle">Sign up to create your menu's, share your experience, and be found by locals to start working as your own mobile restaurant!</p>
                                </div>
                                <div className="title-action">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home;