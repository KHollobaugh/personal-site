import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectDisplay = props => {
    return (
        <div className='project-display'>
        {props.projects.map((project, index) =>
        <ProjectCard 
        key={index}
        project={project}
        />
        )}  
        </div>
    )
}
export default ProjectDisplay;