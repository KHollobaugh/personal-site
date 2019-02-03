import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const BlogCard = (props) => {
  return (
    <div className="card-container">
    <a href={props.article.url} target="_blank" rel="noopener noreferrer">
      <Card>
        <CardImg top width="100%" src={props.article.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.article.title}</h3></CardTitle>
          <CardSubtitle><h4>{props.article.subtitle}</h4></CardSubtitle>
        </CardBody>
      </Card>
      </a>
      </div>
  );
};

export default BlogCard;