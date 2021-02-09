
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockAlt, faEnvelopeOpenText, faMedal } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Card, Form, Modal, Button, Container, InputGroup, ProgressBar } from '@themesberg/react-bootstrap';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import Documentation from "../../components/Documentation";


export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  const handleClose = () => {
    setShowDefault(false);
    setShowNotification(false);
    setShowSignin(false);
    setShowSignup(false);
    setShowAchievement(false);
    setShowSubscribe(false);
  }

  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Modals</h1>
            <p className="mb-0">
              Use modals to develop faster and more interactive user interfaces.
          </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="mb-4">
            <Documentation
              title="Example"
              description={
                <>
                  <p>The <code>&#x3C;Modal&#x3E;</code> component can be used as a way to show extra content on top of the existing UI based on an event. For example, you can use the <code>onClick</code> event from a button component to show a modal by using the <code>setShowDefault(true)</code> function.</p>
                  <p>Additionally, you can use the <code>handleClose</code> event to handle the situation when the modal is being closed.</p>
                </>
              }
              scope={{ Col, Card, Button, Modal, showDefault, setShowDefault, handleClose, useState }}
              imports={`import React, { useState } from "react";
import { Button, Modal } from '@themesberg/react-bootstrap';

const [showDefault, setShowDefault] = useState(false);
const handleClose = () => setShowDefault(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Default</Button>

  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title className="h6">Terms of Service</Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
      <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
      <p>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        I Got It
    </Button>
      <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
        Close
    </Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>`}
            />

            <Documentation
              title="Notification"
              description={
                <p>Use the following <code>&#x3C;Modal&#x3E;</code> component to show notifications to the user. </p>
              }
              scope={{ Button, Modal, FontAwesomeIcon, faEnvelopeOpen, showNotification, setShowNotification, handleClose, useState }}
              imports={`import React, { useState } from "react";
import { Button, Modal } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

const [showNotification, setShowNotification] = useState(false);
const handleClose = () => setShowNotification(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowNotification(true)}>Notification</Button>

  <Modal centered show={showNotification} className="modal-secondary" onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>
        <p className="mb-0 pe-3 pe-md-0">
          A new experience, personalized for you.
        </p>
      </Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
      <div className="py-3 text-center">
        <span className="modal-icon display-1">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </span>

        <Modal.Title className="h4 my-3">Important message!</Modal.Title>
        <p>Do you know that you can assign status and relation to a company right in the visit list?</p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="white" size="sm">Go to Inbox</Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>`}
            />

            <Documentation
              title="Sign in modal"
              description={
                <p>The following example of a <code>&#x3C;Modal&#x3E;</code> component can be used for a login action for the user.</p>
              }
              scope={{ Form, Card, Button, Modal, InputGroup, FontAwesomeIcon, faEnvelope, faUnlockAlt, faFacebookF, faTwitter, faGithub, showSignin, setShowSignin, useState, handleClose }}
              imports={`import React, { useState } from "react";
import { Card, Form, Button, Modal, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const [showSignin, setShowSignin] = useState(false);
const handleClose = () => setShowSignin(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowSignin(true)}>Sign In</Button>

  <Modal centered show={showSignin} onHide={handleClose}>
    <Modal.Header className="border-0">
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body className="p-0">
      <Card className="px-0 px-md-4 py-0 border-0">
        <Card.Header className="pb-0 py-0 border-0">
          <h2 className="h4">Sign in to our platform</h2>
          <span>Login here using your username and password</span>
        </Card.Header>
        <Card.Body>
          <Form action="#" className="mt-4" onSubmit={handleClose}>
            <Form.Group id="exampleInputEmailCard1" className="mb-4">
              <Form.Label>Your Email</Form.Label>
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <Form.Control type="email" placeholder="example@company.com" />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Group className="mb-4" id="exampleInputPasswordCard1">
                <Form.Label>Your Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check
                  label="Remember me"
                  id="defaultCheck5"
                  htmlFor="defaultCheck5" />

                <Card.Link href="#lost-password" className="small text-end">Lost password?</Card.Link>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">Sign In</Button>
          </Form>

          <div className="mt-3 mb-4 text-center">
            <span className="fw-normal">or login with</span>
          </div>
          <div className="d-flex justify-content-center my-4">
            <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>
            <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button variant="outline-light" className="btn-icon-only btn-pill text-github me-2">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </div>
          <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
            <span className="fw-normal">
              Not registered? <Card.Link href="#create-account" className="fw-bold">Create account</Card.Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Modal.Body>
  </Modal>
</React.Fragment>`}
            />

            <Documentation
              title="Sign up modal"
              description={
                <p>The following <code>&#x3C;Modal&#x3E;</code> component can be used to show a register UI for the user.</p>
              }
              scope={{ Form, Card, Button, Modal, InputGroup, useState, FontAwesomeIcon, faEnvelope, faUnlockAlt, faFacebookF, faTwitter, faGithub, setShowSignup, showSignup, handleClose }}
              imports={`import React, { useState } from "react";
import { Card, Form, Button, Modal, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const [showSignup, setShowSignup] = useState(false);
const handleClose = () => setShowSignup(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowSignup(true)}>Sign up</Button>

  <Modal centered show={showSignup} onHide={handleClose}>
    <Modal.Header className="border-0">
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body className="p-0">
      <Card border="light" className="px-0 px-md-4 py-0 border-0">
        <Card.Header className="pb-0 py-0 border-0">
          <h2 className="h5 mb-0">Create Account</h2>
        </Card.Header>
        <Card.Body>
          <Form action="#" onSubmit={handleClose}>
            <Form.Group id="exampleInputEmailCard3" className="mb-4">
              <Form.Label>Your Email</Form.Label>
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <Form.Control type="email" placeholder="example@company.com" />
              </InputGroup>
            </Form.Group>

            <Form.Group>
              <Form.Group className="mb-4" id="exampleInputPasswordCard4">
                <Form.Label>Your Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-4" id="exampleInputPasswordCard5">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FontAwesomeIcon icon={faUnlockAlt} /></InputGroup.Text>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </InputGroup>
              </Form.Group>

              <Form.Check
                className="mb-4"
                label="I agree to the terms and conditions"
                id="defaultCheck6"
                htmlFor="defaultCheck6" />

            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign up
                  </Button>
          </Form>

          <div className="mt-3 mb-4 text-center">
            <span className="fw-normal">or</span>
          </div>
          <div className="d-flex justify-content-center my-4">
            <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>
            <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button variant="outline-light" className="btn-icon-only btn-pill text-github">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </div>
          <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
            <span className="fw-normal">
              Already have an account? <Card.Link href="#login" className="fw-bold">Login here</Card.Link>
            </span>
          </div>
        </Card.Body>
      </Card>
    </Modal.Body>
  </Modal>
</React.Fragment>`}
            />

            <Documentation
              title="Achievement"
              description={
                <p>Use the following modal to show achievements to the user.</p>
              }
              scope={{ Button, Modal, ProgressBar, useState, FontAwesomeIcon, faMedal, setShowAchievement, showAchievement, handleClose }}
              imports={`import React, { useState } from "react";
import { Button, Modal, ProgressBar } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const [showAchievement, setShowAchievement] = useState(false);
const handleClose = () => setShowAchievement(false);`}
              example={`<React.Fragment>
  <Button variant="tertiary" className="my-3" onClick={() => setShowAchievement(true)}>Achievement</Button>

  <Modal centered show={showAchievement} onHide={handleClose} className="modal-tertiary">
    <Modal.Header className="mx-auto">
      <p className="lead mb-0 text-white">You just unlocked a new badge</p>
    </Modal.Header>
    <Modal.Body>
      <div className="py-3 px-5 text-center">
        <span className="modal-icon icon-white display-1">
          <FontAwesomeIcon icon={faMedal} />
        </span>

        <Modal.Title className="text-white mb-3"><h3>Author Level 5</h3></Modal.Title>
        <p className="mb-4 text-white">One Thousand Dollars! Well done mate - heads are turning your way.</p>
        <ProgressBar variant="primary" now={60} min={0} max={100} />
      </div>
    </Modal.Body>
    <Modal.Footer className="modal-footer d-flex justify-content-center">
      <button type="button" className="btn btn-sm btn-white text-tertiary" data-dismiss="modal">Awesome!</button>
    </Modal.Footer>
  </Modal>
</React.Fragment>`}
            />

            <Documentation
              title="Subscribe"
              description={
                <p>Lastly, you can use this modal as a way to convince your users to subscribe to an email list or newsletter.</p>
              }
              scope={{ Card, Form, Button, Modal, InputGroup, useState, FontAwesomeIcon, faEnvelopeOpenText, setShowSubscribe, showSubscribe, handleClose }}
              imports={`import React, { useState } from "react";
import { Form, Card, Button, Modal, InputGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const [showSubscribe, setShowSubscribe] = useState(false);
const handleClose = () => setShowSubscribe(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowSubscribe(true)}>Subscribe</Button>

  <Modal centered size="lg" className="modal-dark text-white" show={showSubscribe} onHide={handleClose}>
    <Modal.Header>
      <Button variant="close" className="btn-close-white text-white" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body className="text-center py-3">
      <span className="modal-icon display-1 my-4">
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </span>
      <Modal.Title className="mb-3">
        <h3>Join our 1,360,462 subscribers</h3>
      </Modal.Title>
      <p className="mb-4 lead">Get exclusive access to freebies, premium products and news.</p>
      <Form.Group className="px-lg-5" id="modalInputSubscribe7">
        <InputGroup className="d-flex mb-3 justify-content-center">
          <Form.Control size="lg" placeholder="example@company.com" className="me-sm-1 mb-sm-0" />
          <Button variant="tertiary" size="lg" type="submit" className="ms-sm-1">Subscribe</Button>
        </InputGroup>
      </Form.Group>
    </Modal.Body>
    <Modal.Footer className="z-2 mx-auto text-center pb-5">
      <Card.Text color="white" className="font-small">
        We’ll never share your details with third parties.
      <br className="visible-md" />View our <Card.Link href="#privacy-policy">Privacy Policy</Card.Link> for more info.
    </Card.Text>
    </Modal.Footer>
  </Modal>
</React.Fragment>`}
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
};
