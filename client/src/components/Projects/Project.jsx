import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import posts from '../../posts.json'
import Posts from '../Posts/Posts';

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = posts.find(post => post.id === id);

  useEffect(() => {
    if (project === undefined) {
      navigate('/Projects');
    }
  }, [project, navigate]);
  
  return (
    <>
      {project === undefined ? 
      ''
      : 
      <Posts overridePosts={true} post={[project]}/>}
    </>
)
}

export default Project