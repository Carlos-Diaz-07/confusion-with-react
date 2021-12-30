import { Component } from "react/cjs/react.production.min";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  render() {
    const dish = this.props.dish;

    const renderDish = (dish) => {
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

    const renderComments = (dish) => {
      if (dish != null) {
        return (
          <div className='col-12 col-md-5 m-1'>
            <Card>
              <CardBody>
                <CardTitle heading>Comments</CardTitle>
                {dish.comments.map((comment) => {
                  return (
                    <CardText>
                      {comment.comment}
                      <br />
                      <br />
                      -- {comment.author}, {comment.date}
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

    return (
      <div className='row'>
        {renderDish(dish)}
        {renderComments(dish)}
      </div>
    );
  }
}

export default DishDetail;
