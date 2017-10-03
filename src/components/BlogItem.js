import React from 'react';

class BlogItem extends React.Component{
    render(){
        return (
            <div className="blog-item">
                <img src="/images/logo.svg" className="App-logo" alt="logo" />
                <h2 className="blog-item__name">Blog Page</h2>
                <p className="blog-item__description"></p>
            </div>
        )
    };
};

export default BlogItem;