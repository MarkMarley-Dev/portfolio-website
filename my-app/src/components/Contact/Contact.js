import "./styles.css";

import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
import Address from "../../assets/address.png";
import { useContext, useRef, useState } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";

import { ThemeContext } from "../../store/context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  init("user_XKJOh3hPCIAE9q22dXR6g");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hn3g64p",
        "template_yhn6hov",
        formRef.current,
        "user_XKJOh3hPCIAE9q22dXR6g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Interested in contacting me?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +44 7447821328
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              markmarleydev@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Clapham, South London
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> Drop me a line?</b> Always available for a quick chat about
            anything!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#FFFFFF" : "#222",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#FFFFFF" : "#222",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#FFFFFF" : "#222",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode ? "#FFFFFF" : "#222",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
