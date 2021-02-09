
import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Modal, Button, InputGroup } from '@themesberg/react-bootstrap';


export const EventModal = (props) => {
  const [title, setTitle] = useState(props.title);
  const [start, setStart] = useState(props.start);
  const [end, setEnd] = useState(props.end);

  const { show = false, edit = false, id } = props;
  const startDate = start ? moment(start).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");
  const endDate = end ? moment(end).endOf("day").format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");

  const onTitleChange = (e) => setTitle(e.target.value);

  const onConfirm = () => {
    const finalStart = moment(startDate).toDate();
    const finalEnd = moment(endDate).toDate();
    const payload = { id, title, start: finalStart, end: finalEnd };

    if (edit) {
      return props.onUpdate && props.onUpdate(payload);
    }

    return props.onAdd && props.onAdd(payload);
  }
  const onDelete = () => edit && props.onDelete && props.onDelete(id);
  const onHide = () => props.onHide && props.onHide();

  return (
    <Modal as={Modal.Dialog} centered show={show} onHide={onHide}>
      <Form className="modal-content">
        <Modal.Body>
          <Form.Group id="title" className="mb-4">
            <Form.Label>Event title</Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              value={title}
              onChange={onTitleChange} />
          </Form.Group>
          <Row>
            <Col xs={12} lg={6}>
              <Form.Group id="startDate">
                <Form.Label>Select start date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setStart}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={startDate}
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col xs={12} lg={6}>
              <Form.Group id="endDate" className="mb-2">
                <Form.Label>Select end date</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setEnd}
                  isValidDate={currDate => currDate.isAfter(start)}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={endDate}
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="me-2" onClick={onConfirm}>
            {edit ? "Update event" : "Add new event"}
          </Button>

          {edit ? (
            <Button variant="danger" onClick={onDelete}>
              Delete event
            </Button>
          ) : null}

          <Button variant="link" className="text-gray ms-auto" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
