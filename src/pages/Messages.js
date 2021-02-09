import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faChevronDown, faChevronLeft, faChevronRight, faEnvelope, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup, OverlayTrigger, Tooltip } from '@themesberg/react-bootstrap';

import { MessageCardWidget } from "../components/Widgets";
import { Routes } from "../routes";
import MESSAGES_DATA from "../data/messages";

const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));

export default () => {
  const [messages, setMessages] = useState(MESSAGES_DATA);
  const selectedMessageIds = messages.filter(m => m.isSelected).map(m => m.id);
  const disableMenu = selectedMessageIds.length === 0;

  const selectMessage = (id) => {
    const newMessages = messages.map(m => {
      const isSelected = m.id === id ? !m.isSelected : m.isSelected;
      return { ...m, isSelected };
    });

    setMessages(newMessages);
  };

  const toggleReadStatus = (id) => {
    setMessages(messages.map(m => m.id === id ? { ...m, read: !m.read } : m));
  };

  const markSelectedMessagesAsUnread = () => {
    const newMessages = messages.map(m => selectedMessageIds.includes(m.id) ? { ...m, read: false } : m);
    setMessages(newMessages);
  };

  const deleteMessages = async (ids) => {
    const messagesNr = ids.length;
    const textMessage = messagesNr === 1
      ? "Are you sure do you want to delete this message?"
      : `Are you sure do you want to delete this ${messagesNr} messages?`;

    const result = await SwalWithBootstrapButtons.fire({
      icon: "error",
      title: "Confirm deletion",
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      const newMessages = messages.filter(f => !ids.includes(f.id));
      const confirmMessage = messagesNr === 1 ? "The message was deleted." : "The messages were deleted.";

      setMessages(newMessages);
      await SwalWithBootstrapButtons.fire('Deleted', confirmMessage, 'success');
    }
  };

  const archiveSelectedMessages = async () => {
    const messagesNr = selectedMessageIds.length;
    const textMessage = messagesNr === 1
      ? "Are you sure do you want to archive this message?"
      : `Are you sure do you want to archive this ${messagesNr} messages?`;

    const result = await SwalWithBootstrapButtons.fire({
      icon: "question",
      iconHtml: `<i class="fas fa-archive"></i>`,
      title: "Confirm archivation",
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      const newMessages = messages.filter(f => !selectedMessageIds.includes(f.id));
      const confirmMessage = messagesNr === 1 ? "The message has been archived." : "The messages were archived.";

      setMessages(newMessages);
      await SwalWithBootstrapButtons.fire('Archived', confirmMessage, 'success');
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center pb-2 pt-4 pb-md-4">
        <Button as={Link} to={Routes.SingleMessage.path} variant="secondary" className="text-dark mb-3 mb-md-0">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          <span>Compose</span>
        </Button>
        <div className="d-block d-sm-flex">
          <ButtonGroup className="mb-3 me-3 mb-md-0 d-none d-md-inline-flex">
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Mark as Unread</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={markSelectedMessagesAsUnread} >
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Archive</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={archiveSelectedMessages} >
                <FontAwesomeIcon icon={faArchive} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Delete</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={() => deleteMessages(selectedMessageIds)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </OverlayTrigger>
          </ButtonGroup>

          <Dropdown className="mb-3 mb-md-0">
            <Dropdown.Toggle as={Button} variant="primary" className=" arrow-none" disabled={disableMenu}>
              More <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.ItemText className="fw-bold text-dark w-100">
                More options:
              </Dropdown.ItemText>
              <Dropdown.Item>Add to Tasks</Dropdown.Item>
              <Dropdown.Item>Add Star</Dropdown.Item>
              <Dropdown.Item>Mute</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="message-wrapper border bg-white border-light shadow-sm py-1 rounded">
        {messages.map(m => (
          <MessageCardWidget
            {...m}
            key={`message-${m.id}`}
            selectMessage={selectMessage}
            toggleReadStatus={toggleReadStatus}
            deleteMessage={id => deleteMessages([id])}
          />
        ))}

        <Row className="d-flex align-items-center p-4">
          <Col xs={7} className="mt-1">
            Showing 1 - {messages.length} of 289
          </Col>
          <Col xs={5}>
            <ButtonGroup className="float-end">
              <Button variant="light">
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button variant="primary">
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </>
  );
};
