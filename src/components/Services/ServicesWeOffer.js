import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ServicesWeOffer.css";
import Eyeglass1 from "../../Image/Eyeglass1.png";
import EyeExamination from "../../Image/EyeExamination.png";
import Cataract from "../../Image/Cataract.jpg";
import ChildEye from "../../Image/ChildEye.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ServicesWeOffer() {
  return (
    <Container className="BigContainer">
      <Row>
        <div className="container service text-center" id="service">
          <div className="row">
            <h2>Services We Offer</h2>
            <h4>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </h4>
          </div>
        </div>
      </Row>
      <Row className="SecondRow">
        <div className="SecondRowDiv">
          <Col>
            <figure>
              <img
                title="Full Eye Diagnosis using modern equipments by our sub specialists"
                src={EyeExamination}
                alt="Eye Examination"
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
            </figure>
            <div>
              <figcaption>
                <h3 className="ServiceHeaderh3">Full Eye Diagnosis</h3>
              </figcaption>
            </div>
          </Col>
          <Col>
            <div>
              <figure>
                <img
                  title="Cataract Surgery and other surgeries"
                  src={Cataract}
                  alt="Cataract Surgery"
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                />
              </figure>
            </div>
            <div>
              <figcaption>
                <h3 className="ServiceHeaderh3">Eye Surgery</h3>
              </figcaption>
            </div>
          </Col>
          <Col>
            <div>
              <figure>
                <img
                  title="Cataract Surgery and other surgeries"
                  src={ChildEye}
                  alt="ChildEye Treatment"
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                />
              </figure>
            </div>
            <div>
              <figcaption>
                <h3 className="ServiceHeaderh3">Child Eye Treatment</h3>
              </figcaption>
            </div>
          </Col>
          <Col>
            <div>
              <figure>
                <img
                  title="All types of Eyeglass Servicess"
                  src={Eyeglass1}
                  alt="Eye Glass Service"
                  style={{ width: 200, height: 200, borderRadius: 10 }}
                />
              </figure>
            </div>
            <div>
              <figcaption>
                <h3 className="ServiceHeaderh3">Eyglass Service</h3>
              </figcaption>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default ServicesWeOffer;
