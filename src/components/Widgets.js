
import React from "react";
import moment from 'moment-timezone';
import CountUp from "react-countup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClock, faAngleUp, faShare, faArrowRight, faEdit, faTrash, faEllipsisH, faArrowUp, faArrowDown, faComments, faSave, faChartArea, faChartBar, faHistory, faExclamation, faEnvelopeOpenText, faChartLine, faCheck, faCheckCircle, faEye, faFlagUsa, faFolderOpen, faGlobeEurope, faPaperclip, faStar, faStarHalfAlt, faTrashAlt, faUserPlus, faUserShield, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faBootstrap, faFacebook, faGoogle, faReact, faTwitter, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Badge, Image, Button, FormCheck, ListGroup, ProgressBar, Tooltip, Dropdown, OverlayTrigger } from '@themesberg/react-bootstrap';
import { CircleChart, BarChart, PieChart, DognutChart, LineGraphChart, SalesValueChart, SalesValueChartphone } from "./Charts";
import { Link } from 'react-router-dom';

import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import Profile2 from "../assets/img/team/profile-picture-2.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";

import { Routes } from "../routes";
import teamMembers from "../data/teamMembers";
import countries from "../data/countries";


export const CardWidget = (props) => {
  const { title, value, period } = props;

  return (
    <Card border="light">
      <Card.Body>
        <h5>{title}</h5>
        <h2 className="mb-1">{value}</h2>
        <div className="small mb-3">
          {period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide
        </div>
      </Card.Body>
    </Card>
  );
};

export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Neil Sims</Card.Title>
        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>

        <Button variant="primary" size="sm" className="me-2">
          <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
        </Button>
        <Button variant="secondary" size="sm">Send Message</Button>
      </Card.Body>
    </Card>
  );
};

export const PriceCardWidget = (props) => {
  const { variant = "primary", priceType = "monthly", priceMontly, priceYearly, period = "month", title, description, features = [], btnText, btnTextColor = "" } = props;
  const btnClassName = btnTextColor ? `w-100 text-${btnTextColor}` : `w-100`;
  const price = priceType === "monthly" ? priceMontly : priceYearly;

  const Feature = ({ text }) => {
    return (
      <div className="d-flex mb-1">
        <div className="icon-md icon-gray lh-180 me-3">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <Card className="mb-5">
      <Card.Header className="border-0 py-5 px-4">
        <div className="d-flex mb-3">
          <h5 className="mb-0">$</h5>
          <span className={`price display-2 text-${variant} mb-0`}>
            <CountUp start={priceMontly} end={price} />
          </span>
          <h6 className="fw-normal align-self-end">/{period}</h6>
        </div>
        <h4 className="mb-3 text-black">{title}</h4>
        <p className="fw-normal mb-0">{description}</p>
      </Card.Header>
      <Card.Body className="p-4 pt-0">
        {features.map((text, index) => <Feature key={`feature-${index}`} text={text} />)}
      </Card.Body>
      <Card.Footer className="border-0 pt-0 px-4 pb-4">
        <Button as={Link} variant={`outline-${variant}`} to={Routes.Signup.path} target="_blank" className={btnClassName}>
          {btnText} <span className="icon icon-xs ms-3"><FontAwesomeIcon icon={faArrowRight} /></span>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export const OrderHistoryWidget = () => {
  const InvoiceItem = (props) => {
    const { invoiceNumber, invoiceDate } = props
      , invoiceDateFormatted = invoiceDate.format("MMMM DD, YYYY");

    return (
      <ListGroup.Item className="border-bottom">
        <Row className="align-items-center">
          <Col>
            <h3 className="h6 mb-1">
              <a href="#!">Invoice #{invoiceNumber}</a>
            </h3>
            <small className="text-gray-700">
              Billed {invoiceDateFormatted}
            </small>
          </Col>
          <Col className="col-auto">
            <Button variant="outline-dark" className="btn-xs">
              Pay now
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card bg="white" border="light" className="shadow-sm p-0 p-md-4">
      <Card.Header className="border-bottom p-3">
        <h5>Order History</h5>
        <Card.Text className="mb-0">Manage billing information and view receipts</Card.Text>
      </Card.Header>
      <Card.Body className="px-0 py-0">
        <ListGroup>
          <InvoiceItem invoiceNumber="120345" invoiceDate={moment().subtract("1", "day")} />
          <InvoiceItem invoiceNumber="120344" invoiceDate={moment().subtract("2", "days")} />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const MessageCardWidget = (props) => {
  const { id, image, read, sender, timeSent, message, isSelected } = props;
  const nameFirstLetters = sender.match(/\b\w/g).join('');
  const timeColor = read ? "text-muted" : "text-danger";
  const textColor = read ? "fw-normal" : "fw-bold";
  const readText = read ? "Mark as Unread" : "Mark as Read";

  const toggleReadStatus = () => {
    props.toggleReadStatus && props.toggleReadStatus(id);
  };

  const deleteMessage = () => {
    props.deleteMessage && props.deleteMessage(id);
  };

  const selectMessage = () => {
    props.selectMessage && props.selectMessage(id);
  };

  return (
    <Card border="bottom" className="hover-state rounded-0 py-3">
      <Card.Body className="d-flex align-items-center flex-wrap flex-lg-nowrap py-0">
        <Col xs={1} className="align-items-center px-0 d-none d-lg-flex">
          <FormCheck type="checkbox" className="inbox-check me-2">
            <FormCheck.Input id={`message-${id}`} value={isSelected} onChange={selectMessage} />
            <FormCheck.Label htmlFor={`message-${id}`} />
          </FormCheck>
          <FormCheck type="checkbox" className="rating-star d-none d-lg-inline-block">
            <FormCheck.Input id={`star-message-${id}`} />
            <FormCheck.Label htmlFor={`star-message-${id}`} className="rating-star-label" />
          </FormCheck>
        </Col>
        <Col xs={10} lg={2} className="ps-0">
          <Card.Link as={Link} to={Routes.SingleMessage.path} className="d-flex align-items-center">
            {image
              ? <Image src={image} className="user-avatar rounded-circle me-3" />
              : <div className="user-avatar xs-avatar bg-tertiary me-3"><span>{nameFirstLetters}</span></div>
            }
            <span className={`${textColor} h6 mb-0`}>
              {sender}
            </span>
          </Card.Link>
        </Col>
        <Col xs={2} lg={2} className="d-flex align-items-center justify-content-end px-0 order-lg-4">
          <div className={`${timeColor} small d-none d-lg-block`}>
            {timeSent}
          </div>
          <Dropdown className="ms-3">
            <Dropdown.Toggle as={Button} variant="link" className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="icon icon-sm icon-dark">
                <FontAwesomeIcon icon={faEllipsisH} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item as={Link} className="ms-0" onClick={toggleReadStatus}>
                <FontAwesomeIcon icon={faUserShield} className="me-2" /> {readText}
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={Routes.SingleMessage.path} className="ms-0">
                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item as={Link} className="text-danger ms-0" onClick={deleteMessage}>
                <FontAwesomeIcon icon={faUserTimes} className="me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} lg={7} className="d-flex align-items-center mt-3 mt-lg-0 ps-0">
          <Card.Link as={Link} to={Routes.SingleMessage.path} className="fw-normal text-gray truncate-text">
            <span className={`${textColor} ps-lg-3`}>
              {message}
            </span>
          </Card.Link>
        </Col>
      </Card.Body>
    </Card>
  );
};

export const TaskCardWidget = (props) => {
  const { id, title, time, statusKey, description, isSelected } = props;
  const formCheckId = `task-${id}`;
  const starId = `star-task-${id}`;
  const completed = statusKey === "done";
  const completedClassName = completed ? "line-through" : "";

  const status = {
    done: { color: "success", label: "Done" },
    inProgress: { color: "warning", label: "In Progress" },
    waiting: { color: "purple", label: "Waiting" }
  };

  const statusColor = status[statusKey] ? status[statusKey].color : 'danger'
    , statusLabel = status[statusKey] ? status[statusKey].label : 'Offline'
    , doneText = statusKey === "done" ? "Mark as In Progress" : "Mark as Done"
    , doneColor = statusKey === "done" ? status.inProgress.color : status.done.color;

  const toggleDoneStatus = () => {
    props.toggleDoneStatus && props.toggleDoneStatus(id);
  };

  const deleteTask = () => {
    props.deleteTask && props.deleteTask(id);
  };

  const selectTask = () => {
    props.selectTask && props.selectTask(id);
  };

  return (
    <Card border="bottom" className="hover-state rounded-0 py-3">
      <Card.Body className="d-sm-flex align-items-md-center flex-wrap flex-lg-nowrap py-0 ps-sm-0">
        <Col xs="auto" lg={1} className="text-start text-sm-center ps-0 ps-sm-4 mb-2 mb-sm-0">
          <FormCheck type="checkbox" className="check-lg inbox-check me-sm-2">
            <FormCheck.Input id={formCheckId} value={isSelected} onChange={selectTask} />
            <FormCheck.Label htmlFor={formCheckId} />
          </FormCheck>
        </Col>
        <Col xs={10} lg={8} className="d-block px-0 mb-4 mb-md-0">
          <div className="mb-2">
            <h5 className={completedClassName}>
              {title}
            </h5>
            <div className="d-block d-sm-flex">
              <div>
                <h6 className="fw-normal text-gray mb-3 mb-sm-0">
                  <FontAwesomeIcon icon={faClock} className="me-2" /> {time}
                </h6>
              </div>
              <div className="ms-sm-3">
                <Badge bg={statusColor} className="super-badge badge-lg">
                  {statusLabel}
                </Badge>
              </div>
            </div>
          </div>
          <div>
            <Card.Link as={Link} to={Routes.SingleMessage.path} className="fw-bold text-dark">
              <span className={`fw-normal text-gray ${completedClassName}`}>
                {description}
              </span>
            </Card.Link>
          </div>
        </Col>
        <Col xs={10} sm={2} lg={2} xl={2} className="d-none d-lg-block d-xl-inline-flex align-items-center ms-lg-auto text-end justify-content-end px-md-0">
          <FormCheck type="checkbox" className="rating-star star-lg d-none d-lg-inline-block">
            <FormCheck.Input id={starId} />
            <FormCheck.Label htmlFor={starId} className="rating-star-label" />
          </FormCheck>

          <Dropdown className="ms-3">
            <Dropdown.Toggle as={Button} variant="link" className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="icon icon-sm icon-dark">
                <FontAwesomeIcon icon={faEllipsisH} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item as={Link} className="ms-0">
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item as={Link} className={`text-${doneColor} ms-0`} onClick={toggleDoneStatus}>
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" /> {doneText}
              </Dropdown.Item>
              <Dropdown.Item as={Link} className="text-danger ms-0" onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Card.Body>
    </Card>
  );
};

export const ListChartWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <h5>Related Sites</h5>
        <ul className="list-unstyled ps-0 mb-0">
          <li className="mb-1">
            <span className="icon icon-small text-google w-20 me-1">
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            <Card.Link href="#">google.com</Card.Link>
          </li>
          <li className="mb-1">
            <span className="icon icon-small text-facebook w-20 me-1">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <Card.Link href="#">facebook.com</Card.Link>
          </li>
          <li className="mb-1">
            <span className="icon icon-small text-twitter w-20 me-1">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <Card.Link href="#">twitter.com</Card.Link>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>
                {percentage}%
              </span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h5 className="mb-3">{title}</h5>

            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <FontAwesomeIcon icon={d.icon} className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {` ${d.label} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget2 = (props) => {
  const { title, data = [] } = props;
  const series = data.reduce((acc, curr) => {
    acc.values.push(curr.value);

    if (acc.top.value < curr.value) {
      acc.top = curr
    };

    return acc
  }, { values: [], top: { value: 0, label: "No data" } });

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{series.top.label}</h4>
          <small className="text-success mt-2">
            <FontAwesomeIcon icon={faAngleUp} className="me-1" />
            <span className="fw-bold">{series.top.value}%</span>
          </small>
        </div>
        <div className="ms-auto">
          {data.map(d => (
            <div key={`circle-chart-2-${d.id}`} className="d-flex align-items-center mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal me-3">{d.label}</small>
              <small className="fw-bold text-dark ms-auto">{d.value}%</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2 py-5">
        <CircleChart donutWidth={50} series={series.values} />
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const series = data.map(d => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h3>{value}</h3>
          <small className="mt-2">
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={`${percentageColor} fw-bold`}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget2 = (props) => {
  const { title, value, data = [] } = props;
  const labels = ['20 Apr', '21 Apr', '22 Apr', '23 Apr', '24 Apr', '25 Apr', '26 Apr'];
  const series = data.map(d => d.value);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h5>{title}</h5>
          <div className="small mt-2 mb-3">
            <FontAwesomeIcon icon={faAngleUp} className="text-success me-1" />
            <span className="text-success fw-bold">{value}</span>
            <span className="fw-bold ms-2">
              <FontAwesomeIcon icon={faGlobeEurope} className="icon icon-small me-1" />
              WorldWide
            </span>
          </div>
          <div className="d-flex">
            {data.map(d => (
              <div key={`bar-element-2-${d.id}`} className="d-flex align-items-center me-3 lh-130">
                <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
                <small className="fw-normal">{d.label}</small>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} chartClassName="ct-major-tenth" />
      </Card.Body>
    </Card>
  );
};

export const PieChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.reduce((acc, curr) => {
    acc.values.push(curr.value);

    if (acc.top.value < curr.value) {
      acc.top = curr;
    }

    return acc
  }, { values: [], top: { value: 0, label: "No data" } });

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{series.top.label}</h4>
          <small className="mt-2">
            <FontAwesomeIcon icon={faAngleUp} className="text-success me-1" />
            <span className="text-success fw-bold">{series.top.value}%</span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`pie-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <span className="fw-normal small">{d.label}</span>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <PieChart series={series.values} />
      </Card.Body>
    </Card>
  );
};

export const DognutChartWidget = (props) => {
  const { title, value, percentage, data = [] } = props;
  const series = data.map(d => d.value);
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{value}</h4>
          <small className="mt-2">
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={`${percentageColor} fw-bold`}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`dognut-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <DognutChart series={series} />
      </Card.Body>
    </Card>
  );
};

export const TeamMembersWidget = () => {
  const TeamMember = (props) => {
    const { name, statusKey, image, icon, btnText } = props;
    const status = {
      online: { color: "success", label: "Online" },
      inMeeting: { color: "warning", label: "In a meeting" },
      offline: { color: "danger", label: "Offline" }
    };

    const statusColor = status[statusKey] ? status[statusKey].color : 'danger'
      , statusLabel = status[statusKey] ? status[statusKey].label : 'Offline';

    return (
      <ListGroup.Item className="px-0">
        <Row className="align-items-center">
          <Col className="col-auto">
            <a href="#top" className="user-avatar">
              <Image src={image} className="rounded-circle" />
            </a>
          </Col>
          <Col className="ms--2">
            <h4 className="h6 mb-0">
              <a href="#!">{name}</a>
            </h4>
            <span className={`text-${statusColor}`}>● </span>
            <small>{statusLabel}</small>
          </Col>
          <Col className="col-auto">
            <Button variant="tertiary" size="sm">
              <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light d-flex justify-content-between">
        <h5 className="mb-0">Team members</h5>
        <Button variant="secondary" size="sm">See all</Button>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list my--3">
          {teamMembers.map(tm => <TeamMember key={`team-member-${tm.id}`} {...tm} />)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const ProgressTrackWidget = () => {
  const Progress = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";

    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress track</h5>
      </Card.Header>
      <Card.Body>

        <Progress title="Rocket - SaaS Template" color="purple" icon={faBootstrap} percentage={34} />
        <Progress title="Pixel - Design System" color="danger" icon={faAngular} percentage={60} />
        <Progress title="Spaces - Listings Template" color="tertiary" icon={faVuejs} percentage={45} />
        <Progress title="Stellar - Dashboard" color="info" icon={faReact} percentage={35} />
        <Progress last title="Volt - Dashboard" color="purple" icon={faBootstrap} percentage={34} />
      </Card.Body>
    </Card>
  );
};

export const EventsWidget = () => {
  const Event = (props) => {
    const { organizer, startDate, endDate, location, address, onlyTime, lastItem } = props
      , startDateTime = startDate.format('HH:mm A')
      , startDateMonth = startDate.format('MMM')
      , startDateDay = startDate.format('D')
      , startDateFormatted = startDate.format('ddd, D MMM')
      , endDateFormatted = endDate.format('ddd, D MMM YYYY')
      , eventDuration = `${startDateFormatted} - ${endDateFormatted}`;

    return (
      <Row className={`align-items-center d-block d-sm-flex ${lastItem ? "" : "border-bottom border-light pb-4 mb-4"}`}>
        <Col className="col-auto mb-3 mb-sm-0">
          <div className="calendar d-flex">
            <span className="calendar-month">{startDateMonth}</span>
            <span className="calendar-day">{startDateDay}</span>
          </div>
        </Col>
        <Col>
          <Card.Link as={Link} to={Routes.Calendar.path}>
            <h5>{location}</h5>
          </Card.Link>
          <span>Organized by <Card.Link href="#" className="text-700">{organizer}</Card.Link></span>
          <div className="small fw-bold mt-1">{onlyTime ? `Time: ${startDateTime}` : eventDuration}</div>
          <span className="small fw-bold">Place: {address}</span>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h2 className="h5 mb-0">Events</h2>
      </Card.Header>
      <Card.Body>
        <Event
          organizer="University of Oxford"
          startDate={moment().hour(20).minutes(0)}
          endDate={moment().add(1, "day")}
          location="Newmarket Nights"
          address="Cambridge Boat Club, Cambridge"
          onlyTime={true}
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add(5, "days")}
          endDate={moment().add(7, "days")}
          location="Noco Hemp Expo"
          address="Denver Expo Club, USA"
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add("1", "month").add("10", "days")}
          endDate={moment().add("1", "month").add("17", "days")}
          location="Canadian National Exhibition (CNE)"
          address="Toronto, Canada"
        />
        <Event
          organizer="University of Oxford"
          startDate={moment().add("1", "month").add("15", "days")}
          endDate={moment().add("1", "month").add("16", "days")}
          location="Great Opera Hits"
          address="Sydney Opera House, Australia"
          lastItem={true}
        />
      </Card.Body>
      <Card.Footer className="border-top border-light text-center">
        <a className="fw-bold text-primary" href="#top">See all</a>
      </Card.Footer>
    </Card>
  );
};

export const RankingWidget = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3">
          <div>
            <h6><FontAwesomeIcon icon={faGlobeEurope} className="icon icon-xs me-3" /> Global Rank</h6>
          </div>
          <div>
            <Card.Link href="#" className="text-primary fw-bold">
              #755 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-bottom border-light py-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFlagUsa} className="icon icon-xs me-3" />Country Rank</h6>
            <div className="small card-stats">
              United States <FontAwesomeIcon icon={faAngleUp} className="icon icon-xs text-success ms-2" />
            </div>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #32 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-3">
          <div>
            <h6 className="mb-0"><FontAwesomeIcon icon={faFolderOpen} className="icon icon-xs me-3" />Category Rank</h6>
            <Card.Link href="#top" className="small card-stats">
              Travel &gt; Accomodation
            </Card.Link>
          </div>
          <div>
            <Card.Link href="#top" className="text-primary fw-bold">
              #16 <FontAwesomeIcon icon={faChartLine} className="ms-2" />
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const VisitsMapWidget = () => {
  const Country = (props) => {
    const { image, name, visits, percentage, color = "primary" } = props;

    return (
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Image roundedCircle src={image} className="image-xs" />
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{name} <span className="text-gray font-small">({visits})</span></h6>
              <small className="fw-bold text-dark"><span>{percentage} %</span></small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100} />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="pb-3">
        <h5 className="m-0">Visits past 30 days by country</h5>
      </Card.Header>
      <Card.Body className="pb-0">
        {countries.map(c => <Country key={`country-${c.id}`} {...c} />)}
      </Card.Body>
      <Card.Footer className="border-top border-light text-center">
        <Card.Link as={Link} to={Routes.Calendar.path} className="fw-bold text-primary">
          See all
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export const LineGraphChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);

  const top = data.reduce((acc, curr) => {
    const maxValue = Math.max(...curr.value);
    const dataWithMaxValue = { ...curr, value: maxValue };
    acc.values.push(dataWithMaxValue);

    if (acc.data.value < maxValue) {
      acc.data = dataWithMaxValue;
    }

    return acc
  }, { values: [], data: { value: 0, label: "No data" } });

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="w-100 d-flex justify-content-between align-items-start">
        <div>
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          <h4>{top.data.label}</h4>
          <small className="mt-2">
            <FontAwesomeIcon icon={faAngleUp} className="text-success me-1" />
            <span className="text-success fw-bold">{top.data.value}M</span>
            <span className="fw-bold ms-2">
              <FontAwesomeIcon icon={faGlobeEurope} className="me-1" />WorldWide
            </span>
          </small>
        </div>
        <div className="d-xl-flex flex-wrap justify-content-end">
          {top.values.map(d => (
            <div key={`circle-chart-2-${d.id}`} className="d-flex align-items-center mb-2 me-3 lh-130">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
              <small className="fw-bold text-dark ms-1">{d.value}M</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2 py-5">
        <LineGraphChart series={series} />
      </Card.Body>
    </Card>
  );
};

export const RatingsWidget = () => {
  const Review = (props) => {
    const { starsCount, variant } = props;

    return (
      <Row className="d-flex align-items-center mb-1">
        <Col xs={2} color="gray" className="fw-bold px-0 small">
          {starsCount}<FontAwesomeIcon icon={faStar} className="ms-1" />
        </Col>
        <Col xs={10} className="px-0">
          <ProgressBar className="rounded progress-lg mb-0"
            variant={variant}
            now={starsCount * 10}
            min={0}
            max={100}
          />
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-md-flex align-items-center">
          <Col md="5">
            <h2 className="h5 mb-1">Average Rating</h2>
            <h3 className="h1 mb-1">4.5</h3>
            <div className="mb-2">
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStar} className="text-warning" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />
            </div>
            <span className="small">Based on <span color="dark" className="fw-bold">103,456</span> ratings</span>
          </Col>
          <Col md="7" className="mt-3 mt-md-0">
            <Col>
              <Review starsCount={5} variant="success" />
              <Review starsCount={4} variant="cyan" />
              <Review starsCount={3} variant="warning" />
              <Review starsCount={2} variant="orange" />
              <Review starsCount={1} variant="danger" />
            </Col>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const NotificationsWidget = () => {
  const SettingsItem = (props) => {
    const { id, title, subtitle, enabled = false } = props;

    return (
      <ListGroup.Item className="d-flex align-items-center justify-content-between px-0 border-bottom">
        <div>
          <Card.Text className="h6 mb-1">{title}</Card.Text>
          <Card.Text className="small pe-4">{subtitle}</Card.Text>
        </div>
        <div>
          <FormCheck type="switch">
            <FormCheck.Input defaultChecked={enabled} id={`user-notification-${id}`} />
            <FormCheck.Label htmlFor={`user-notification-${id}`} />
          </FormCheck>
        </div>
      </ListGroup.Item>
    );
  };

  return (
    <Card bg="white" border="light">
      <Card.Header className="border-light shadow-sm">
        <h2 className="h5 mb-0">Alerts &amp; Notifications</h2>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <SettingsItem
            id={1}
            enabled={false}
            title="Company News"
            subtitle="Get Rocket news, announcements, and product updates"
          />
          <SettingsItem
            id={2}
            enabled={true}
            title="Account Activity"
            subtitle="Get important notifications about you or activity you've missed"
          />
          <SettingsItem
            id={3}
            enabled={true}
            title="Meetups Near You"
            subtitle="Get an email when a Dribbble Meetup is posted close to my location"
          />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidget = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">Month</Button>
          <Button variant="primary" size="sm" className="me-3">Week</Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart />
      </Card.Body>
    </Card>
  );
};

export const SalesValueWidgetphone = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card className="bg-secondary-alt shadow-sm">
      <Card.Header className="d-md-flex flex-row align-items-center flex-0">
        <div className="d-block mb-3 mb-md-0">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
            <span className={percentageColor}>
              {percentage}%
            </span>
          </small>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">Month</Button>
          <Button variant="primary" size="sm" className="me-3">Week</Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChartphone />
      </Card.Body>
    </Card>
  );
};

export const AcquisitionWidget = () => {
  return (
    <Card border="ligh" className="shadow-sm">
      <Card.Body>
        <h5 >Acquisition</h5>
        <p>Tells you where your visitors originated from, such as search engines, social networks or website referrals.</p>
        <div className="d-block">
          <div className="d-flex align-items-center pt-3 me-5">
            <div className="icon icon-shape icon-sm icon-shape-danger rounded me-3">
              <FontAwesomeIcon icon={faChartBar} />
            </div>
            <div className="d-block">
              <label className="mb-0">Bounce Rate</label>
              <h4 className="mb-0">33.50%</h4>
            </div>
          </div>
          <div className="d-flex align-items-center pt-3">
            <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
              <FontAwesomeIcon icon={faChartArea} />
            </div>
            <div className="d-block">
              <label className="mb-0">Sessions</label>
              <h4 className="mb-0">9,567</h4>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const ChangePlanWidget = () => {
  const currentDay = moment().format("MMMM DD, YYYY");

  return (
    <Card border="light" className="shadow-sm text-center py-4 mb-4 mb-lg-0">
      <Card.Body>
        <h2 className="display-4 mb-3">Volt<span className="pro-badge subscription-badge bg-secondary fw-bolder text-dark">PRO</span></h2>
        <p>Switch your subscription to a different type, such as a monthly plan, annual plan, or student plan. And see a list of subscription plans that Volt offers</p>
        <p className="text-dark my-4">Next payment of <span className="fw-bold">$36 (yearly)</span>{` occurs on ${currentDay}.`}</p>
        <div className="d-grid d-sm-flex justify-content-sm-center gap-2">
          <Card.Link as={Button} variant="dark" size="sm" className="me-1">
            Cancel subscription
          </Card.Link>
          <Button as={Link} variant="primary" size="sm ms-0" to={Routes.Pricing.path}>
            Change plan
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const TimelineWidget = () => {
  const TimelineItem = (props) => {
    const { title, message, time, icon, iconBg } = props;

    return (
      <ListGroup.Item>
        <Row>
          <Col className="col-auto">
            <div className={`icon icon-shape icon-sm bg-${iconBg} text-white rounded-circle`}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </Col>
          <Col className="ms-n2">
            <h3 className="h6 text-gray font-weight-normal mb-1">
              {title}
            </h3>
            <Card.Text className="text-dark font-weight-bold mb-0">
              {message}
            </Card.Text>
            <small className="text-gray">
              <FontAwesomeIcon icon={faClock} className="me-2" />{time}
            </small>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="d-flex align-items-center border-bottom border-light">
        <h3 className="h5 mb-0">Notification Timeline</h3>
        <div className="ms-auto">
          <Card.Link className="text-primary font-weight-bold" href="#!">
            View all
          </Card.Link>
        </div>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush list-group-timeline">
          <TimelineItem
            time="2m ago"
            title="New message"
            iconBg="tertiary"
            icon={faEnvelopeOpenText}
            message="Let's meet at Starbucks at 11:30. Wdyt?"
          />
          <TimelineItem
            time="3 hrs ago"
            title="Product issue"
            iconBg="danger"
            icon={faExclamation}
            message="A new issue has been reported for Pixel Pro."
          />
          <TimelineItem
            time="3 hrs ago"
            title="Product update"
            iconBg="info"
            icon={faHistory}
            message="Spaces - Listings Template has been updated"
          />
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export const BlogCardWidget = () => {
  return (
    <Card border="light" className="p-2 p-md-4">
      <Card.Header className="rounded rounded-0">
        <div className="post-meta">
          <div className="media d-flex align-items-center justify-content-between">
            <div className="post-group">
              <OverlayTrigger
                placement="top"
                overlay={(props) => <Tooltip {...props}>23k followers</Tooltip>}>

                <div><Image src={Profile2} className="avatar-sm me-2 img-fluid rounded-circle" alt="avatar" /> techhub</div>
              </OverlayTrigger>
            </div>
            <div className="d-flex align-items-center">
              <div className="author-name text-dark font-weight-bold font-small me-4 d-none d-lg-block">
                Posted by <Card.Link href="#top" className="me-2">@bonniegreen</Card.Link>5 hours ago
                        </div>
              <Dropdown>
                <Dropdown.Toggle split variant="link" className="m-0 p-0">
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#edit">
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit post
                            </Dropdown.Item>
                  <Dropdown.Item className="text-danger" href="#delete">
                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete post
                            </Dropdown.Item >
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="py-4 px-0">
        <Card.Link href="#profile">
          <Image src={ProfileCover} className="card-img-top rounded" alt="blog image" />
          <h4 className="my-4">List of public corporations by market capitalization</h4>
        </Card.Link>
        <Card.Text className="mb-4">
          All of the world's 10 largest companies as measured by market capitalization are American. Market capitalization is the total value of a company's entire purchased shares of stock. While these companies...
                  </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0 pt-0 px-0">
        <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
          <div className="post-details mb-3 mb-lg-0">
            <Button size="sm" variant="primary" className="animate-hover me-2">
              <FontAwesomeIcon icon={faArrowUp} className="me-2 animate-up-2" /> 4
                      </Button>
            <Button size="sm" variant="danger" className="animate-hover">
              <FontAwesomeIcon icon={faArrowDown} className="me-2 animate-up-2" /> 1
                      </Button>
          </div>
          <div className="post-meta">
            <Card.Link className="text-dark me-3" href="#comments">
              <FontAwesomeIcon icon={faComments} className="me-2" /> 33.7k
                      </Card.Link>
            <Button variant="link" className="me-3 text-primary">
              <FontAwesomeIcon icon={faShare} className="me-2" /> Share
                      </Button>
            <Button variant="secondary">
              <FontAwesomeIcon icon={faSave} className="me-2" /> Save
                      </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};