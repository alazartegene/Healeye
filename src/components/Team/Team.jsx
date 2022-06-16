import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Team.css";
import item1 from "../TeamImages/member1.jpg";
import item2 from "../TeamImages/member2.jpg";
import item3 from "../TeamImages/member3.jpg";
import item4 from "../TeamImages/member4.jpg";
import item5 from "../TeamImages/member5.jpg";
import item6 from "../TeamImages/member6.jpg";
// import Kume from "../svg/Kume";
function Team() {
  return (
    <Container className="top-container">
      <Row >
        <Col className="Our-teams">
          <div className="team-heading text-center">
            <h2> Our Doctor's </h2>
            <h4>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </h4>
          </div>
        </Col>
      </Row>
      <Row className="Doctors-row">
        <Col className="person-picture">
          {/* <Kume style={{width: 400, height: 400, borderRadius: 400/ 2}}/> */}
          <img
            className="img-responsive"
            src={item1}
            alt="member-1"
            style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
          />
        </Col>
        <Col >
          <div className="person-detail">
            <div className="arrow-bottom"></div>
            <h3> Dr. Kumele Tolosa </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </Col>
		<Col >
          <div className="person-detail">
            <div className="arrow-bottom"></div>
            <h3>Dr. Guteta G/Michael</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </Col>
        <Col >
          <div className="person">
            <img
              class="img-responsive"
              src={item2}
              alt="member-2"
              style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
            />
          </div>
        </Col>
      </Row>
      {/* <Row className="Doctors-row">
        <Col>
          <div className="person-detail">
            <div className="arrow-top"></div>
            <h3>Dr. Guteta G/Michael</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </Col>
        <Col>
          <div className="person">
            <img
              class="img-responsive"
              src={item2}
              alt="member-2"
              style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
            />
          </div>
        </Col>
      </Row> */}
      {/* 
		<Row>
        <Col>
          <div className="col-md-2 single-member col-sm-4">
            <div className="person">
              <img className="img-responsive" src={item3} alt="member-3" />
            </div>
            <div className="person-detail">
              <div className="arrow-bottom"></div>
              <h3>Dr. Caitlin, M.D.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row> */}

      {/* </div>
      <div className="flex-row">
        <div className="col-md-2 single-member col-sm-4">
          <div className="person-detail">
            <div className="arrow-top"></div>
            <h3>Dr. Joseph, M.D.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <div className="person">
            <img className="img-responsive" src={item4} alt="member-4" />
          </div>
        </div>
        <div className="col-md-2 single-member col-sm-4">
          <div className="person">
            <img className="img-responsive" src={item5} alt="member-5" />
          </div>
          <div className="person-detail">
            <div className="arrow-bottom"></div>
            <h3>Dr. Michael, M.D.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </div>
        <div className="col-md-2 single-member col-sm-4">
          <div className="person-detail">
            <div className="arrow-top"></div>
            <h3>Dr. Hasina, M.D.</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
          <div className="person">
            <img className="img-responsive" src={item6} alt="member-5" />
          </div>
        </div>
      </div> */}
    </Container>
  );
}

export default Team;
