
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faComments, faLightbulb, faPaperPlane, faSun, faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Nav, Row, Col, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Navs</h1>
          <p className="mb-0">
            Use navigation tabs to break up pieces of content.
          </p>
        </Col>
      </Row>

      <Documentation
        title="Example"
        description={
          <p>The <code>&#x3C;Nav&#x3E;</code> component should be used for app navigation, such as for the navigation bar, a secondary menu, or other. The <code>&#x3C;Nav.Link&#x3E;</code> component can be attributed with the location of the link.</p>
        }
        scope={{ Nav, Row, Col }}
        imports={`import { Nav } from '@themesberg/react-bootstrap';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-sm-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-0">
          Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">
          Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">
          Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-0">
          Messages
            </Nav.Link> 
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Rounded navs"
        description={
          <p>If you want the nav style to be rounded, just add the <code>rounded</code> class name to the main <code>&#x3C;Nav.Link&#x3E;</code> component.</p>
        }
        scope={{ Nav, Row, Col }}
        imports={`import { Nav } from '@themesberg/react-bootstrap';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="rounded flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#home" className="mb-sm-3 mb-md-0">
          Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">
          Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">
          Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-0">
          Messages
            </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Rounded navs with icons"
        description={
          <p>If you want to add other content to a navigation item, such as an icon, you can do that by </p>
        }
        scope={{ Nav, FontAwesomeIcon, faTachometerAlt, faComments, faSun, faUserCircle, Row, Col }}
        imports={`import { Nav } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faComments, faSun, faUserCircle } from '@fortawesome/free-regular-svg-icons';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faSun} className="me-2" /> Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faComments} className="me-2" /> Messages
            </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Circle navs"
        description={
          <p>If you want to style the navigation items as full circles and using icons, use the <code>nav-pill-circle</code> class for the <code>&#x3C;Nav&#x3E;</code> component.</p>
        }
        scope={{ Nav, FontAwesomeIcon, faComments, faSun, faUser, faLightbulb, faPaperPlane, Row, Col }}
        imports={`import { Nav, Card } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSun, faUser, faLightbulb, faPaperPlane } from '@fortawesome/free-regular-svg-icons';`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="nav-pill-circle flex-column flex-md-row">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#home">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#">
          <FontAwesomeIcon icon={faLightbulb} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#">
          <FontAwesomeIcon icon={faSun} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="messages" href="#">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#">
          <FontAwesomeIcon icon={faComments} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />

      <Documentation
        title="Vertical navs"
        description={
          <p>If you'd like the navigation items to be ordered vertically, and not horizontally as it is by default, you can use the classes <code>flex-column vertical-tab</code> on the main <code>&#x3C;Nav&#x3E;</code> component to achieve that.</p>
        }
        scope={{ Nav, FontAwesomeIcon, faDungeon, faComments, faSun, faUserCircle, Row, Col }}
        imports={`import { Nav } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { faComments, faSun, faUserCircle } from "@fortawesome/free-regular-svg-icons";`}
        example={`<Row>
  <Col lg={6}>
    <Nav fill defaultActiveKey="home" variant="pills" className="square flex-column vertical-tab">
      <Nav.Item>
        <Nav.Link eventKey="home" href="#home" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faDungeon} className="me-2" /> Home
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Profile
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faSun} className="me-2" /> Settings
            </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="comments" href="#" className="mb-sm-3 mb-md-0">
          <FontAwesomeIcon icon={faComments} className="me-2" /> Messages
            </Nav.Link>
      </Nav.Item>
    </Nav>
  </Col>
</Row>`}
      />
    </Container>
  </article>
);
