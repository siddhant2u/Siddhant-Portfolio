import React from "react";
import Typical from "react-typical";
import './Profile.css';
import './resume.pdf';

const Profile = React.memo(() => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/siddhant2u">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/siddhant_priyadarshi/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/siddhant2u">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/siddhant-priyadarshi/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <h2 className="hello">
              {" "}
              Hello! I am {" "}
            </h2>
            <span className="highlighted-text">Siddhant Priyadarshi</span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev.",
                    1000,
                    "Frontend Developer.",
                    1000,
                    "Blockchain Developer.",
                    1000,
                    "Competetive coder.",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>

          <div className="profile-options">
            <a href="../../../assets/resume.pdf" download="resume.pdf">
              <button className="btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
});

export default Profile;
