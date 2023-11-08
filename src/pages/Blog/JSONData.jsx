import React, { useState } from "react";
import Data from "./LoopData";
const blogs = [
  {
    title: "Blog 01",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
    description: "This is my first blog.",
  },
  {
    title: "Blog 02",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
    description: "This is my first blog.",
  },
  {
    title: "Blog 03",
    image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg",
    description: "This is my first blog.",
  }
];

function JSONData() {
  const [projectData, setProjectData] = useState(blogs);
  return (
    <>
      <Data data={projectData}/>
    </>
  );
}

export default JSONData;







