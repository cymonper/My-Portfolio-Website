import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
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
                <Card.Title className="headertwocolor">
                  My GitHub Profile
                </Card.Title>
                <Card.Text>Check out my other projects on GitHub</Card.Text>

                <div className="btnanimation">
                  <a href="https://github.com/cymonper" target="_">
                    <input type="button" value="Visit" />
                  </a>
                </div>
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
                <Card.Title>My Linkedin Profile</Card.Title>
                <Card.Text>Lets connect on Linkedin :)</Card.Text>
                <div className="btnanimation">
                  <a
                    href="https://www.linkedin.com/in/cymonpereira/"
                    target="_"
                  >
                    <input type="button" value="Connect" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Contactme;
