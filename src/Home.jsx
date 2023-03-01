import React, { useRef, useState } from "react";

import logo from "./images/logo.png";
import mobile from "./images/mobile.png";

import "./home.css";

const Home = () => {
  const [show, setShow] = useState(false);
  const emailInput = useRef(null);

  const toggleDisplay = () => {
    if (emailInput.current.value !== "") {
      setShow(!show);
    }
  };

  return (
    <div>
      <header className="header">
        <img
          src={logo}
          className="logo"
          alt="logo"
        />
        <div className="header-line"></div>
      </header>
      <main>
        <section>
          <div className="write--up">
            <h2 className="title">
              Keep track of your <br /> loved ones
              in real time!
            </h2>
            <p className="desc">
              We are building a one click tracking
              app for your <br /> friends and
              families
            </p>
            <div className="input-wrap">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email address"
                required
                ref={emailInput}
              />
              <button
                type="submit"
                className="button"
                onClick={() => toggleDisplay()}
              >
                Join List!
              </button>
            </div>
          </div>
          <div className="image-wrap">
            <img
              src={mobile}
              alt=""
              className="mobile-image"
            />
          </div>
        </section>
        {show && (
          <div className="next__step">
            <div className="modal__wrap">
              <div className="modal__image">
                <img
                  src={mobile}
                  alt=""
                  className="modal__mobile"
                />
                <i
                  class="ri-close-circle-fill"
                  onClick={() => toggleDisplay()}
                ></i>
              </div>
              <div className="modal__desc">
                <h3 className="modal__title">
                  Thank You!
                </h3>
                <p className="modal-paragraph">
                  For joining our waitlist. Would
                  you like us to <br /> send you
                  regular updates on key features{" "}
                  <br /> added?
                </p>
                <div
                  className="modal__buttons__wrap"
                  onClick={() => toggleDisplay()}
                >
                  <div className="accept">
                    Yes, please!
                  </div>
                  <div className="reject">
                    No, Thanks!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
