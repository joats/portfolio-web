import React, { Component } from 'react';
import { SectionsContainer, Section, Footer } from 'react-fullpage';
import Welcome from './common/components/Welcome';
import About from './common/components/About';
import Work from './common/components/Work';
import Contact from './common/components/Contact';
import './App.css';

class App extends Component {
  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation: true,
    };
    return (
      <div className="App-container">
        <Footer>
          <div className="d-flex justify-content-center">
            <a className="Footer-btn pr-4 mb-2" href="#sectionOne">Welcome</a>
            <a className="Footer-btn pr-4 pl-4 mb-2" href="#sectionTwo">About</a>
            <a className="Footer-btn pl-4 mb-2" href="#sectionThree">Work</a>
            <a className="Footer-btn pl-4 mb-2" href="#sectionFour">Contact</a>
          </div>
        </Footer>
        <SectionsContainer className="p-0" {...options}>
          <Section className="p-0">
            <Welcome />
          </Section>
          <Section className="p-0">
            <About />
          </Section>
          <Section className="p-0">
             <Work />
          </Section>
         <Section className="p-0">
             <Contact/>
         </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
