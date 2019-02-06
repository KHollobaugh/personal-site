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
        <div className="view-more" >
        <a href="https://github.com/KHollobaugh?tab=repositories"  target="_blank" rel="noopener noreferrer">
        See More
        </a>
        </div>
        </div>
    )
}
export default ProjectDisplay;