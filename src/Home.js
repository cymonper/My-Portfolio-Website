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
import csharp from "./Images/csharp.svg";
import react from "./Images/react.svg";
import python from "./Images/python.svg";
import php from "./Images/php.svg";
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
                  I can build clean, attractive and fully responsive
                  userinterface using HTML, CSS
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={second} alt="Second slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">JavaScript</h3>
                <p className="headercolorc2">
                  I can implement required functionalities using javascript
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={third} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">React (Library)</h3>
                <p className="headercolorc2">
                  ReactJS is my primary javascript Library
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={fourth} alt="Second slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">Python</h3>
                <p className="headercolorc2">
                  And yes I can code in Python too{" "}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src={fifth} alt="Third slide" />

              <Carousel.Caption>
                <h3 className="headercolorc2">C#</h3>
                <p className="headercolorc2">
                  I am sound with C# fundamentals and looking for opportunity to
                  expand and implement my C# knowledge
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
          <p className="headertwocolor" style={{ textAlign: "center" }}>
            Hi I am Cymon, A Junior Web Developer seeking to obtain a creative
            and challenging position that utilizes current knowledge of web
            development and design. Having a positive outlook and am always
            willing to learn new traits. I work well both independently and as
            part of a team.
          </p>
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
          <h1 className="headercolor">Skills</h1>
          <br />
          <h2 className="headertwocolor">Front-End Technologies</h2>
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
          <div
            className="mt-5"
            style={{
              fontFamily: "VT323",
              alignment: "center",
            }}
          >
            <CardGroup>
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
                  src={csharp}
                  style={{
                    height: "100px",
                    width: "160px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Card.Body className="headertwocolor">
                  <Card.Title>C#</Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          <h2 className="headertwocolor">Back-End Technologies</h2>
          <br />
          <CardGroup className="headertwocolor">
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
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default Home;
