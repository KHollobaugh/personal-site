import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const BlogCard = (props) => {
  return (
    <div className="portfolio-piece">
      <Card>
        <CardImg top width="100%" src={props.article.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.article.title}</h3></CardTitle>
          <CardSubtitle><h4>{props.article.subtitle}</h4></CardSubtitle>
          <div className='card-buttons'>

          </div>
        </CardBody>
      </Card>
      </div>
  );
};

export default BlogCard;