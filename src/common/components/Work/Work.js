import React from 'react';
import { Row, Col } from 'reactstrap';

export default () => {
     return(
          <Row className="Work-container m-0">
               <Col className="h-100">
                  {/* <img src={} alt="" />   */}
               </Col>
               <Col className="h-100 m-5">
                  <h2 className="text-center pt-5 pb-5">Work</h2>
                  <p className="text-center pb-5">I,ve Worked with a range of diferent customers. Such as McDonalds, Brightcat and Hyreslandslaget. While my work is mostly functional I have also have a deep understanding about design and user experience. </p>
                  <p className="text-center">My focus is to develop products that are easy to use, fast working and looks pleasing to the eye.</p>
               </Col>
          </Row>     
     );
};