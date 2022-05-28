import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="footer">
      <div className="getintouch">
        <h1>Get In Touch</h1>
      </div>
      <div className="opportunities">
        <h5>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </h5>
      </div>

      <div className="logos">
        <div className="contact-links">
          <a
            href="tel:+91-9975161692"
            aria-label="phone"
            rel="noreferrer"
            target="_blank"
          >
            <i id="logo1" class="fas fa-phone-alt"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="mailto:sachiningale1998@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://twitter.com/Sachin_Ingale_"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sachin98/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://github.com/sachiningale1998"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div id="myself">
        <h6>
          Sachin Ingale
          <br />
          Kukana, Tal : Newasa, Dist : Ahmednagar, Maharashtra, 41604.
          <br />
          +91 9975161692
          <br />
          sachiningale1998@gmail.com
        </h6>
        <br />
        <br />
      </div>
      <div id="colaborate">
        <h6>
          Drop a suggestion, feedback, opportunities or we can colaborate on a
          project. Please mention your contact details if you are expecting a
          reply.
        </h6>
      </div>

      <div style={{ width: "50%", justifyContent: "center", margin: "auto" }}>
        <form className="form-sas">
          <div>
            <input
              name="from_name"
              placeholder="Enter your name"
              type="name"
              className="Contact_formsubi__xHwJa form-control"
            />
          </div>
          <br />
          <div>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              className="Contact_formmsg__39M9c form-control"
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            className="Contact_buttonComponent__JAxTI btn btn-primary"
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Contact;
{
  /* <div className="Contact_contactOptions__qH1OA" style={{color: "rgb(204, 214, 246)"}}><a href="tel:+91-9975161692" aria-label="GitHub" rel="noreferrer" target="_blank"><i className="fas fa-phone-alt" aria-hidden="true"></i></a><a href="mailto:katkarabhi91@gmail.com" aria-label="email" target="_blank" rel="noreferrer"><i className="far fa-envelope" aria-hidden="true"></i></a><a href="https://twitter.com/Abhikatkar91" aria-label="Twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>...<a href="https://github.com/abhikatkar" aria-label="GitHub" rel="noreferrer" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>...<a href="https://www.linkedin.com/in/abhishek-katkar/" aria-label="Linkedin" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></div> */
}
