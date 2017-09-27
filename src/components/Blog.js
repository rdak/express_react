import React from 'react';
// import { Link } from 'react-router';

// import NotFoundPage from './NotFoundPage';
// import AthletesMenu from './AthletesMenu';

// import Medal from './Medal';
// import Flag from './Flag';
// import athletes from '../data/athletes';

class Blog extends React.Component{
    render(){
        return (
            <div className="body-page">
                <div className="App-header">
                    <img src="/images/logo.svg" className="App-logo" alt="logo" />
                    <h2>Blog Page</h2>
                </div>
                <p className="App-intro">
                    There are a lot of articles below.
                </p>
            </div>
        )
    };
};

export default Blog;