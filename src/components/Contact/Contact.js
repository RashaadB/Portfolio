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
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="" alt="" className="c-icon" />
              rsamuelb14@gmail.com
            </div>
            <div className="c-info-item">
              <img src="" alt="" className="c-icon" />
              rsamuelb14@gmail.com
            </div>
            <div className="c-info-item">
              <img src="" alt="" className="c-icon" />
              rsamuelb14@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolorem maxime excepturi ducimus ab quos nostrum.
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
