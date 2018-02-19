import React from 'react';
import { Row, Col } from 'reactstrap';
import AboutImg from '../../images/developer-opacity.jpg';
import './About.css';

export default () => (
          <Row className="h-100 w100">
            <Col className="m-5 h-100">
               <h2 className="text-center pt-5 pb-5">Skills</h2>
               <div className="pb-5">
                  <h3 className="text-center">Computer languages</h3>
                  <p className="text-center">JavaScript, React.js, Node.js, Html, Css, Java, Android</p>
               </div>
               <div className="pb-5">
                  <h3 className="text-center">Agile development</h3>
                  <p className="text-center">Scrum, Kanban</p>
               </div>
            </Col>
            <Col>
               <img className="h-100 w-100" src={AboutImg} alt="about" />
            </Col>
          </Row>     
     );
