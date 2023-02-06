import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import './mainstyle.css';

const ExperienceCard = () => {
  return (
    <div className="pagelayout">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Col lg="6">

        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <CardTitle tag="h4" className="mb-2">
              Senior Software Engineer/Team Lead at Teladoc Health Inc
            </CardTitle>
            <CardTitle tag="h4" className="mb-2">
              Senior Software Engineer at The Washington Post
            </CardTitle>
            <CardTitle tag="h4" className="mb-2">
              Front end Web Developer at Deloitte Consulting Inc
            </CardTitle>
            <CardTitle tag="h4" className="mb-2">
              Software Developer at NYC Tech Consulting
            </CardTitle>
            <CardTitle tag="h4" className="mb-2">
              UI Intern at Haver Analytics
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              Skills:
            </CardSubtitle>
            <CardSubtitle></CardSubtitle>
            <CardText
              tag="div"
              className="description my-3 text-left"
            >
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  React JS
                </li>
                <li>
                  Angular JS
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  Cypress
                </li>
                <li>
                  Jest/Enzyme
                </li>
                <li>
                  AWS
                </li>
                <li>
                  CI/CD
                </li>
                <li>
                  HTML & CSS
                </li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default ExperienceCard;