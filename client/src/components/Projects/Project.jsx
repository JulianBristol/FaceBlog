import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import posts from '../../posts.json'
import Posts from '../Posts/Posts';

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = posts.find(post => post.id === id);
  
  return (
    <>
      {project === undefined ? 
      (
        <>
        <h2>Error: Page not found</h2>
        <p>Click <a href='/Projects'>here</a> to go back to all projects</p>
        </>
      )
      : 
      <Posts overridePosts={true} post={[project]}/>}
    </>
)
}

export default Project