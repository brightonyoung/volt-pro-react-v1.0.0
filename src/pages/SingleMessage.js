import React, { useState } from "react";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faAngleLeft, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Image, Button } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import CONVERSATION_MESSAGES, { createMessage } from "../data/conversation";
import { Routes } from "../routes";

export default () => {
  const [conversation, setConversation] = useState(CONVERSATION_MESSAGES);
  const [message, setMessage] = useState("");
  const currentDate = moment().format("Do of MMMM, YYYY");

  const sendMessage = (e) => {
    e.preventDefault()

    const newId = conversation.length + 1;
    const newMessage = createMessage(newId, message);
    setConversation([...conversation, newMessage]);
    setMessage("");
  };

  const MyMessage = (props) => {
    const { sender, timeSent, message } = props;

    return (
      <Card border="light" className="bg-primary text-white p-4 ms-md-5 ms-lg-6 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="font-small">
            <span className="fw-bold">{sender.name}</span>
            <span className="ms-2">{timeSent}</span>
          </span>
          <div className="d-none d-sm-block">
            <Button variant="link" className="text-white">
              <FontAwesomeIcon icon={faMobileAlt} />
            </Button>
          </div>
        </div>
        <p className="m-0">
          {message}
        </p>
      </Card>
    );
  };

  const Message = (props) => {
    const { sender, timeSent, message } = props;

    return (
      <Card border="light" className="bg-white p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="font-small">
            <Card.Link href="#">
              <Image src={sender.image} className="avatar-sm img-fluid rounded-circle me-2" />
              <span className="fw-bold">{sender.name}</span>
            </Card.Link>
            <span className="ms-2">{timeSent}</span>
          </span>
          <div className="d-none d-sm-block">
            <Button variant="link" className="text-dark">
              <FontAwesomeIcon icon={faMobileAlt} />
            </Button>
          </div>
        </div>
        <p className="m-0">
          {message}
        </p>
      </Card>
    );
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={6}>
          <Card.Link as={Link} to={Routes.Messages.path} className="text-dark fw-bold">
            <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to messages
          </Card.Link>
        </Col>          
        <Col xs={12} sm={6}>
          <p className="small text-muted text-sm-right mt-3 mt-sm-0">Messages from {currentDate}</p>
        </Col>  
        <Col xs={12}>
          {conversation.map(c => c.sender.isMe
            ? <MyMessage key={`my-message-${c.id}`} {...c} />
            : <Message key={`message-${c.id}`} {...c} />
          )}

          <Form className="mt-4" onSubmit={sendMessage}>
            <Form.Control
              required
              rows="6"
              as="textarea"
              maxLength="1000"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              className="border border-light-gray mb-4"
            />

            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="file-field">
                <div className="d-flex justify-content-center">
                  <div className="d-flex">
                    <span className="icon icon-md h6">
                      <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                    </span>
                    <input type="file" />
                    <div className="d-md-block text-start d-none d-sm-block">
                      <div className="fw-normal text-dark mb-1">Add File</div>
                      <div className="text-gray small pe-3 pe-lg-11">
                        Supported files are: jpg, jpeg, png, doc, pdf, gif, zip, rare, tar, txt, xls, docx, xlsx, odt
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="secondary" type="submit" className="text-dark">
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send
                </Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};
