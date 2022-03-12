import React, { Component } from "react";
import { Card, CardGroup, Dropdown, DropdownButton } from "react-bootstrap";
import sfit from "./Images/sfit.png";
import curtin from "./Images/curtin.jpg";
import packt from "./Images/packt.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Workandedu extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}>
        <div>
          <h1 className="headercolor" style={{ textAlign: "center" }}>
            Work Experience
          </h1>
          <CardGroup>
            <Card style={{ border: "0px" }}>
              <Card.Img
                variant="top"
                src={packt}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "40%",
                  borderRadius: "50%",
                }}
              />
            </Card>
            <Card style={{ border: "0px" }}>
              <Card.Body className="headertwocolor">
                <Card.Title>Packt Publishing</Card.Title>
                <Card.Text>Title: Web Developer and Technical Editor</Card.Text>
                <Card.Text>[ February 2018 to December 2018 ]</Card.Text>
                <DropdownButton
                  className="headertwocolor"
                  id="dropdown-basic-button"
                  title="Published Projects"
                >
                  <Dropdown.Item href="https://www.packtpub.com/product/puppet-5-cookbook-fourth-edition/9781788622448">
                    1) Puppet 5
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.packtpub.com/product/fundamentals-of-linux/9781789530957">
                    2) Fundamentals of Linux
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.packtpub.com/product/selenium-webdriver-3-practical-guide-second-edition/9781788999762">
                    3) Selenium WebDriver 3
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.packtpub.com/product/learning-openstack-networking-third-edition/9781788392495">
                    4) Learning OpenStack Networking
                  </Dropdown.Item>
                  <Dropdown.Item href="https://www.packtpub.com/product/mastering-python-for-networking-and-security/9781788992510">
                    5) Mastering Python for Networking and Security
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div>
          <div style={{ marginTop: "5%" }}>
            <h1 className="headercolor" style={{ textAlign: "center" }}>
              {" "}
              Education
            </h1>
            <CardGroup className="headertwocolor">
              <Card style={{ border: "0px" }}>
                <Card.Img
                  variant="top"
                  src={curtin}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "40%",
                    borderRadius: "50%",
                  }}
                />
              </Card>
              <Card style={{ border: "0px" }}>
                <Card.Body style={{ align: "center" }}>
                  <Card.Title className="headertwocolor">
                    Master of Science: Computer Science
                  </Card.Title>
                  <Card.Text>Curtin University</Card.Text>
                  <Card.Text>[ February 2019 to May 2021 ]</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          <div style={{ marginTop: "5%" }}>
            <CardGroup>
              <Card style={{ border: "0px" }}>
                <Card.Img
                  variant="top"
                  src={sfit}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "40%",
                    borderRadius: "50%",
                  }}
                />
              </Card>
              <Card style={{ border: "0px" }}>
                <Card.Body className="headertwocolor">
                  <Card.Title>
                    Bachelor of Engineering: Information Technology
                  </Card.Title>
                  <Card.Text>St Francis Institute of Technology</Card.Text>
                  <Card.Text>[ September 2013 to May 2017 ]</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Workandedu;
