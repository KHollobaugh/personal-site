import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <div className="portfolio-piece">
      <Card>
        <CardImg top width="100%" src={props.project.snapshot} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.project.title}</h3></CardTitle>
          <CardText>{props.project.description}</CardText>
          
          <div className='card-buttons'>

          <Button className="button">
          <a href={props.project.rendering}
          className='button'
          target="_blank"
          rel="noopener noreferrer">
          View Rendering</a></Button>

          <Button className="button">
          <a href={props.project.code}
          className='button'
          target="_blank"
          rel="noopener noreferrer">
          View Code</a></Button>

          </div>
        </CardBody>
        <CardSubtitle><h4>{props.project.technologies}</h4></CardSubtitle>
      </Card>
      </div>
  );
};

export default ProjectCard;