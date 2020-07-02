import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact container">
      <div className="main-div">
        <div className="banner-intro">
          kontakt
        </div>
        <div className="icons-div">
          <div className="icons">
            <img src="https://i.postimg.cc/jSfXCSmH/icons8-gmail-50.png" alt="gmail" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/0j34RHKP/icons8-github-50.png" alt="github" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/XJqxjkbJ/icons8-linkedin-50.png" alt="linkedin" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/Jh4SXJ8w/icons8-facebook-50.png" alt="facebook" />
          </div>
          <div className="icons">
            <img src="https://i.postimg.cc/Cxw2yDzZ/icons8-instagram-50.png" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
