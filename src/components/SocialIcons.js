import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <a href="https://www.facebook.com/kirtana.mogili" className="social">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="https://www.linkedin.com/in/kirtana-mogili-95128b179/" className="social">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="https://github.com/kirtanamogili" className="social">
        <MDBIcon fab icon="github" />
      </a>
      <a href="mailto: kirtanamogili@gatech.edu" className="social">
        <MDBIcon icon="envelope" />
      </a>
    </MDBContainer>
  );
}

export default SocialButtonsPage;