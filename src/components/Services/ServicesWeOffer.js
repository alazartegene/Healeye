import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ServicesWeOffer.css";
import Eyeglass1 from "../../Image/Eyeglass1.png"
import EyeExamination from "../../Image/EyeExamination.png"
import item1 from "../img/service1.png";
import item2 from "../img/service2.png";
import item3 from "../img/service3.png";
import item4 from "../img/service4.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function ServicesWeOffer() {
  return (
    <Container className="BigContainer">
      <Row>
        <Col>
          <div className="container service text-center" id="service">
            <div className="row">
              <h2>Services We Offer</h2>
              <h4>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="ListOfServices">
        <Col lg={3} md={3} sm={6} xs={6} className="ServicePictures">
          <div>
            {/* className="col-md-3 col-sm-6" */}
            <div className="single-service">
              <div className="single-service-img">
                <div className="service-img">
                  <img className="heart img-responsive" src={EyeExamination} alt="" />
                </div>
              </div>
              <h3 className="ServiceHeaderh3">Full Eye Diagnosis</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={3} sm={6} xs={6} className="ServicePictures">
          <div>
            {/* className="col-md-3 col-sm-6" */}
            <div className="single-service">
              <div className="single-service-img">
                <div className="service-img">
                  <img className="brain img-responsive" src={item2} alt="" />
                </div>
              </div>
              <h3 className="ServiceHeaderh3">Eye Surgery</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={3} sm={6} xs={6} className="ServicePictures">
          <div>
            {/* className="col-md-3 col-sm-6" */}
            <div className="single-service">
              <div className="single-service-img">
                <div className="service-img">
                  <img className="knee img-responsive" src={item3} alt="" />
                </div>
              </div>
              <h3 className="ServiceHeaderh3">Child Eye Treatment</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={3} sm={6} xs={6} className="ServicePictures">
          <div>
            {/* className="col-md-3 col-sm-6" */}
            <div className="single-service">
              <div className="single-service-img">
                <div className="service-img">
                  <img className="bone img-responsive" src={Eyeglass1} alt="" />
                </div>
              </div>
              <h3 className="ServiceHeaderh3">Eyglass and Sight</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default ServicesWeOffer;
