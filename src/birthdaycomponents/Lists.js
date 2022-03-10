import React, { memo } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Lists = memo(({ people, setPeople }) => {
  return (
    <div className="container">
      <Card
        style={{
          backgroundColor: "#E8E29A",
          width: "350px",
          marginLeft: "370px",
        }}
      >
        <h2 className="p-3">{people.length} Birthdays today!</h2>
        {people.map((data) => {
          return (
            <>
              <div>
                <CardImg
                  style={{ width: "150px" }}
                  top
                  src={data.image}
                  alt="Card image cap"
                />
              </div>

              <CardBody>
                <CardTitle>
                  <h3>{data.name}</h3>
                </CardTitle>
                <CardSubtitle>{data.age}</CardSubtitle>

                <Button color="info" onClick={() => setPeople([])}>
                  Clear All
                </Button>
              </CardBody>
            </>
          );
        })}
      </Card>
    </div>
  );
});

export default Lists;
