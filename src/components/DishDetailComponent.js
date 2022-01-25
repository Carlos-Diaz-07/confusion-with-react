import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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

const RenderComments = (comments) => {
  if (comments != null) {
    return (
      <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardBody>
            <CardTitle heading>Comments</CardTitle>
            {console.log(comments)}
            {comments.comments.map((comment) => {
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
      <div className='row'>
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
};

export default DishDetail;
