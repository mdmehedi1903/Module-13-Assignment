import React from 'react';

const Blog = () => {
    return (
<div>
    <div class="container py-5">
        <h2 class="text-center">Our Blog</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" class="card-img-top" alt="Blog Post 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Blog Post 1</h5>
                        <p class="card-text">Your blog content for post 1 goes here.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" class="card-img-top" alt="Blog Post 2"/>
                    <div class="card-body">
                        <h5 class="card-title">Blog Post 2</h5>
                        <p class="card-text">Your blog content for post 2 goes here.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" class="card-img-top" alt="Blog Post 3"/>
                    <div class="card-body">
                        <h5 class="card-title">Blog Post 3</h5>
                        <p class="card-text">Your blog content for post 3 goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Blog;