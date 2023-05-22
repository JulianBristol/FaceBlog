import React from 'react'
import posts from '../../posts.json'
import Posts from '../Posts/Posts';

const Projects = () => {
  const projects = posts.filter(obj => obj.type === 'portfolio');
  return (
    <>
      <Posts overridePosts={true} post={projects}/>
    </>
  )
}

export default Projects