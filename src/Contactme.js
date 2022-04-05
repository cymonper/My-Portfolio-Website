import React, { Component } from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import github from "./Images/GITHUB.svg";
import linkedin from "./Images/LINKEDIN.svg";
import "./App.css";

class Contactme extends Component {
  render() {
    return (
      <div>
        <div
          className="mt-5 "
          style={{
            fontFamily: "VT323",
            textAlign: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <CardGroup>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={github}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body className="headertwocolor">
                <Card.Title
                  style={{ fontSize: "25px", fontWeight: "550" }}
                  className="headertwocolor"
                >
                  My GitHub Profile
                </Card.Title>
                <Card.Text style={{ fontSize: "18px" }}>
                  Check out my other projects on GitHub
                </Card.Text>
                <Button
                  href="https://github.com/cymonper/"
                  variant="danger"
                  className="contactme"
                >
                  Visit{" "}
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={linkedin}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body className="headertwocolor">
                <Card.Title style={{ fontSize: "25px", fontWeight: "550" }}>
                  My Linkedin Profile
                </Card.Title>
                <Card.Text style={{ fontSize: "18px" }}>
                  Lets connect on Linkedin :)
                </Card.Text>
                <Button
                  href="https://www.linkedin.com/in/cymonpereira/"
                  variant="danger"
                  className="contactme"
                >
                  Connect{" "}
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Contactme;
