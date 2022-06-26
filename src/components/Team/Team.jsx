import React from "react";
import "./Team.css";
import item1 from "../TeamImages/member1.jpg";
import item2 from "../TeamImages/member2.jpg";

function Team() {
  return (
    <>
      <div>
        <div top-container>
          <div className="team-heading">
            <h2> Our Doctors </h2>
            <h4>
              Hello This is Some discription about our teams
            </h4>
          </div>
        </div>
        <div className="doctor-cont">
          <div className="Doctors-Field">
            <div>
              <div className="person">
                <img
                  className="img-responsive"
                  src={item1}
                  alt="member-1"
                  style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
                />
              </div>
              <div className="person-detail">
                <div className="arrow-bottom"></div>
                <h3> Dr. Kumele Tolosa </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
            <div>
              <div className="person-detail">
                <div className="arrow-bottom"></div>
                <h3>Dr. Guteta G/Michael</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>

              <div className="person">
                <img
                  class="img-responsive"
                  src={item2}
                  alt="member-2"
                  style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
                />
              </div>
            </div>
            <div>
              <div className="person">
                <img
                  className="img-responsive"
                  src={item2}
                  alt="member-1"
                  style={{ width: 200, height: 200, borderRadius: 400 / 2 }}
                />
              </div>
              <div className="person-detail">
                <div className="arrow-bottom"></div>
                <h3> Dr. Kumele Tolosa </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
