import React from 'react';
import { Row, Col } from 'reactstrap';
import './Contact.css';

export default () => {
     return(
          <Row className="Contact-container w-100 h-100 m-0">
               <Col>
                  <div  className="d-flex justify-content-center align-items-center">
                     <h1>
                        Thank you for visiting my site<br />
                        hope to hear from you soon!
                     </h1>
                  </div>   
                  <div  className="d-flex justify-content-center align-items-center">
                     <a 
                        className="Contact-icon fa fa-github-square p-2"
                        href="https://github.com/joats">
                     </a>
                     <a
                        className="Contact-icon fa fa-linkedin-square p-2" 
                        href="https://www.linkedin.com/in/joakim-holmgren/">
                     </a>
                     <a 
                        className="Contact-icon fa fa-envelope-square p-2" 
                        href="mailto:joakim00n@gmail.com">
                     </a>
                    </div>
               </Col>
          </Row>     
     );
};