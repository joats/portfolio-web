import React from 'react';
import { Row, Col } from 'reactstrap';
import './Welcome.css';

export default () => {
     return(
          <Row className="Welcome-container m-0">
               <Col className="Welcome-header">
                    <h1>
                         Hi, I'm Joakim.<br />
                         I develop applications and web interfaces.
                    </h1>     
               </Col>
          </Row>     
     );
};