import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qrecwmk",
        "template_hvbpcl6",
        formRef.current,
        "4ucbsV8iwG-QtEoLS"
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
    <div id="contact"className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="./img/iphone_icon.jpeg" alt="" className="c-icon" />
              336-701-7858
            </div>
            <div className="c-info-item">
              <img
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                src="./img/gmail_pic.png"
                alt=""
                className="c-icon"
                target="_blank"
              />
              rsamuelb14@gmail.com
            </div>
            
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" style={{fontWeight:"bold"}}>
            Fill out the form to send me an email from my portfolio. 
            
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows={5}
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you.."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
