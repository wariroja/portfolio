import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
// core components
import locali from '../../../assets/img/locali.png'

function Card2(){
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "20rem", margin: "50px"}}>
        <CardImg alt="..." data-src="holder.js/100px180/" top img src={locali} height="160"></CardImg>
        <CardBody>
          <CardTitle tag="h4">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Go somewhere
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Card2