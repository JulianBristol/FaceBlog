import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import posts from '../../posts.json'
import Posts from '../Posts/Posts';

const Project = () => {
  const { id } = useParams();
  const project = posts.find(obj => obj.id === id);
  
  return (
    <>
      {project === undefined ? 
      <>Error 404: Project Not Found</>
      : 
      <Posts singlePost={true} post={[project]}/>}
    </>
)
}

export default Project