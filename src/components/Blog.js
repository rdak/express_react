import React from 'react';
import BlogItem from './Blog';

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
                    <BlogItem />
                </p>
            </div>
        )
    };
};

export default Blog;