import {useRef} from "react";
import "./contact.css"
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault();
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

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
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows={5} placeholder="Message" name="message"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
