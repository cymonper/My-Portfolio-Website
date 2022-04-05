import React, { Component } from "react";
import first from "./Images/first.png";
import second from "./Images/second.png";
import third from "./Images/third.png";
import fourth from "./Images/fourth.png";
import fifth from "./Images/fifth.png";
import "./App.css";
import { Card, CardGroup } from "react-bootstrap";
import jss from "./Images/javascript.svg";
import html from "./Images/html.svg";
import css from "./Images/css.svg";
import typescript from "./Images/typescript.svg";

import react from "./Images/react.svg";
import python from "./Images/python.svg";
import php from "./Images/php.svg";
import angular from "./Images/angular.svg";
import bootstrap from "./Images/bootstrap.svg";
import nodejs from "./Images/nodejs.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel style={{ fontFamily: "VT323" }}>
            <Carousel.Item>
              <img className=" w-100 " src={first} alt="First slide" />
              <Carousel.Caption>
                <h3 className="headercolorc2">HTML, CSS</h3>
                <p className="headercolorc2">
                  I can build clean, attractive, and fully responsive
                  user-interfaces using HTML5, CSS3
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={second} alt="Second slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">JavaScript</h3>
                <p className="headercolorc2">
                  I can make interactive and functional Web-Pages using
                  JavaScript
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={third} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">React (Library)</h3>
                <p className="headercolorc2">
                  React.js is my primary JavaScript library
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={fifth} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">Angular Framework</h3>
                <p className="headercolorc2">And I love Angular too</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={fourth} alt="Second slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">Python</h3>
                <p className="headercolorc2">
                  Ofcourse Yes! I can code in Python{" "}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <br />
          <h1 className="headercolor">About Me</h1>
          <h5 className="headertwocolor" style={{ textAlign: "center" }}>
            Junior Web Developer seeking to obtain a creative and challenging
            position that utilizes current knowledge of web development and
            design. Having a positive outlook, always willing to learn new
            traits, and works well both independently and as part of a team.
          </h5>
        </div>
        <div
          className="mt-5 "
          style={{
            fontFamily: "VT323",
            textAlign: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <h1 className="headercolor"> Skills</h1>
          <br />
          <h2 className="headertwocolor">Programming Languages</h2>
          <br />
          <CardGroup className="headertwocolor">
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={jss}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={python}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>Python</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={typescript}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>TypeScript</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={php}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>PHP</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div
          style={{
            fontFamily: "VT323",
            textAlign: "center",
            paddingLeft: "5%",
            paddingRight: "5%",
            marginBottom: "7%",
          }}
        >
          <br />
          <h2 className="headertwocolor">Frontend Development</h2>
          <br />
          <CardGroup className="headertwocolor">
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={react}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body className="headertwocolor">
                <Card.Title>ReactJS Library</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={html}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>HTML5</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={css}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>CSS3</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={angular}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>Angular</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={bootstrap}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>Bootstrap 5</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
          <h2 className="headertwocolor">Backend Development</h2>
          <br />
          <CardGroup className="headertwocolor">
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={nodejs}
                style={{
                  height: "100px",
                  width: "160px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>node.js</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Home;
