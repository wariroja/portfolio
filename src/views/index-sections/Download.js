/** @format */

import React from 'react';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from 'reactstrap';
import Card1 from './Cards/Card1.js';

// core components

function Download() {
  return (
    <>
      <div
        className='section section-download'
        data-background-color='black'
        id='download-section'
      >
        <Container>
          {/* <Row className='justify-content-md-center'>
            <Col className='text-center' lg='8' md='12'>
              <h3 className='title'>Projects</h3>
              <h5 className='description'>
                Cause if you do, it can be yours for FREE. Hit the button below
                to navigate to Creative Tim or Invision where you can find the
                kit in HTML or Sketch/PSD format. Start a new project or give an
                old Bootstrap project a new look!
              </h5>
            </Col>
            <Col className='text-center' lg='8' md='6'>
              <Card1 />
              <Button
                className='btn-round'
                color='primary'
                href='https://www.invisionapp.com/now?ref=creativetim'
                outline
                role='button'
                size='lg'
                target='_blank'
              >
                Download PSD/Sketch
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br> */}
          <Row className='text-center mt-5'>
            <Col className='ml-auto mr-auto' md='8'>
              <h2>About Me</h2>
              <h5 className='description'>
                We're going to launch{' '}
                <a
                  href='http://demos.creative-tim.com/now-ui-kit-pro-react/#/presentation?ref=nukr-index-page'
                  onClick={e => e.preventDefault()}
                >
                  Now UI Kit PRO React
                </a>
                . It will have huge number of components, sections and example
                pages so you can start your development with a badass Bootstrap
                4 UI Kit.
              </h5>
            </Col>
            <Col md='12'>
              <Button
                className='btn-neutral btn-round'
                color='default'
                href='http://demos.creative-tim.com/now-ui-kit-pro-react/#/presentation?ref=nukr-index-page'
                size='lg'
                disabled
              >
                <i className='now-ui-icons arrows-1_share-66 mr-1'></i>
                Upgrade to PRO
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className='justify-content-md-center sharing-area text-center'>
            <Col className='text-center' lg='8' md='12'>
              <h3>Let's stay in touch!</h3>
            </Col>
            <Col className='text-center' lg='8' md='12'>
              <Button
                className='btn-neutral btn-icon btn-round'
                color='twitter'
                href='https://www.twitter.com/creativetim?ref=creativetim'
                id='tooltip86114138'
                size='lg'
                target='_blank'
              >
                <i className='now-ui-icons ui-1_email-85'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip86114138'>
                Follow us
              </UncontrolledTooltip>
              <Button
                className='btn-neutral btn-icon btn-round'
                color='github'
                href='https://www.facebook.com/creativetim?ref=creativetim'
                id='tooltip735272548'
                size='lg'
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip735272548'>
                Like us
              </UncontrolledTooltip>
              <Button
                className='btn-neutral btn-icon btn-round'
                color='linkedin'
                href='https://www.linkedin.com/company-beta/9430489/?ref=creativetim'
                id='tooltip647117716'
                size='lg'
                target='_blank'
              >
                <i className='fab fa-linkedin'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip647117716'>
                Follow us
              </UncontrolledTooltip>
              <Button
                className='btn-neutral btn-icon btn-round'
                color='medium'
                href='https://github.com/creativetimofficial/now-ui-kit-react?ref=creativetim'
                id='tooltip331904895'
                size='lg'
                target='_blank'
              >
                <i className='fab fa-medium'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip331904895'>
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
