import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      <div className="Main-div">
        <div className="Feedback-div">
          <h1>New art</h1>
        </div>
        <div>
          <MDBFooter
            className="text-center footerAkafi"
            color="white"
            bgColor="dark"
          >
            <MDBContainer className="p-4">
              <section className="mb-3">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <FacebookIcon />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <TelegramIcon />
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <LinkedInIcon />
                </a>
              </section>

              <section className="">
                <form action="">
                  <div>
                    <a href="https://www.healeye@gmail.com">
                      Healeye@gmail.com
                    </a>
                  </div>
                </form>
              </section>
            </MDBContainer>
          </MDBFooter>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "#888A8C" }}>
        <h5>Proudly developed by Erchata Tech © 2022</h5>
      </div>
    </>
  );
}
