import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem,
  Button, Modal, ModalBody, ModalHeader,
  Label, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from "./CommentFormComponent";

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle heading>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const RenderComments = (dish, comments) => {
  if (comments != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardBody>
            <CardTitle heading>Comments</CardTitle>
            {/* {console.log(comments)} */}
            {console.log(dish)}

            {dish.comments.map((comment) => {
              return (
                <CardText>
                  {comment.comment}
                  <br />
                  <br />
                  -- {comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </CardText>
              );
            })}
          </CardBody>
          <CommentForm dish={dish} comments={comments} />
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments dish={props.dish} comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
};

export default DishDetail;
