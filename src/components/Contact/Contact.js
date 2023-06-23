import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left-contact">
        <div className="contactTitle">
          <h1 className="title"> Let's get <span>Connected..</span></h1>
        </div>
        <div className="email cont">
          <span>{"  "}siddhant.contactme@gmail.com</span>
        </div>
        <div className="phone cont">
          <span>+91 9821363039</span>
        </div>
        <div className="github cont">
          <a href="https://github.com/siddhant2u">
            <span>siddhant2u</span>
          </a>
        </div>
        <div className="linkedin cont">
          <a href="https://www.linkedin.com/in/siddhant-priyadarshi/">
            <span>siddhant-priyadarshi</span>
          </a>
        </div>
        <div className="twitter cont">
          <a href="https://twitter.com/siddhant2u">
            <span>siddhant2u</span>
          </a>
        </div>
      </div>
      <div className="right-contact">
        <p1 className="contactHeading">Contact Me.</p1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button classType="sendMsg" type="submit">
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
