import React from 'react';

const Single = ({projects}) => {
    const {title, description, image} = projects;
    return (
        <div class="col-md-4">
            <div class="card mb-4">
                        <img src={image} class="card-img-top" alt="Project 1"/>
                        <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        </div>
             </div>
             </div>
    );
};

export default Single;
