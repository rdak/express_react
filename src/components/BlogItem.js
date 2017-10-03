import React from 'react';

class BlogItem extends React.Component{
    render(){
        return (
            <div className="blog-item">
                <h3 className="blog-item__name">Blog Item</h2>
                <p className="blog-item__description">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, reprehenderit.</span>
                    <span>Earum nobis ad unde sequi, inventore, debitis doloremque! Sit, pariatur.</span>
                </p>
            </div>
        )
    };
};

export default BlogItem;