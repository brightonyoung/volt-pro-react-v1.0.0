import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faCheckCircle, faChevronLeft, faChevronRight, faPlus, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, Tooltip, InputGroup, ButtonGroup, OverlayTrigger } from '@themesberg/react-bootstrap';

import { TaskCardWidget } from "../components/Widgets";
import { Routes } from "../routes";
import TASKS_DATA from "../data/tasks";

const SwalWithBootstrapButtons = withReactContent(Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary me-3',
    cancelButton: 'btn btn-gray'
  },
  buttonsStyling: false
}));


export default () => {
  const [tasks, setTasks] = useState(TASKS_DATA);
  const selectedTasksIds = tasks.filter(m => m.isSelected).map(m => m.id);
  const disableMenu = selectedTasksIds.length === 0;

  const toggleDoneStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, statusKey: t.statusKey === "done" ? "inProgress" : "done" } : t));
  };

  const selectTask = (id) => {
    const newTasks = tasks.map(t => {
      const isSelected = t.id === id ? !t.isSelected : t.isSelected;
      return { ...t, isSelected };
    });

    setTasks(newTasks);
  };

  const markSelectedTasksAsDone = async () => {
    const newTasks = tasks.map(t => selectedTasksIds.includes(t.id) ? { ...t, "statusKey": "done" } : t);
    setTasks(newTasks);

    await SwalWithBootstrapButtons.fire("Successfully marked as done.", "", 'success');
  };

  const deleteTasks = async (ids) => {
    const tasksNr = ids.length;
    const textMessage = tasksNr === 1
      ? "Are you sure do you want to delete this task?"
      : `Are you sure do you want to delete this ${tasksNr} tasks?`;

    const result = await SwalWithBootstrapButtons.fire({
      icon: "error",
      title: "Confirm deletion",
      text: textMessage,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      const newTasks = tasks.filter(t => !ids.includes(t.id));
      const confirmMessage = tasksNr === 1 ? "The task was deleted." : "The tasks were deleted.";

      setTasks(newTasks);
      await SwalWithBootstrapButtons.fire('Deleted', confirmMessage, 'success');
    }
  };

  const archiveSelectedTasks = async () => {
    const tasksNr = selectedTasksIds.length;
    const textMessage = tasksNr === 1
      ? "Are you sure do you want to archive this task?"
      : `Are you sure do you want to archive this ${tasksNr} tasks?`;

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
      const newTasks = tasks.filter(f => !selectedTasksIds.includes(f.id));
      const confirmMessage = tasksNr === 1 ? "The task has been archived." : "The tasks were archived.";

      setTasks(newTasks);
      await SwalWithBootstrapButtons.fire('Archived', confirmMessage, 'success');
    }
  };

  return (
    <>
      <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Col xs="auto" className="d-flex justify-content-between ps-0 mb-4 mb-lg-0">
          <div className="me-lg-3">
            <Button as={Link} to={Routes.SingleMessage.path} variant="secondary" className="text-dark me-2">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              <span>New Tasks</span>
            </Button>
          </div>
          <ButtonGroup>
            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Archive</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={archiveSelectedTasks}>
                <FontAwesomeIcon icon={faArchive} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Mark as done</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={markSelectedTasksAsDone}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              trigger={['hover', 'focus']}
              placement="bottom"
              overlay={<Tooltip>Delete</Tooltip>}
            >
              <Button variant="primary" disabled={disableMenu} onClick={() => deleteTasks(selectedTasksIds)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </OverlayTrigger>
          </ButtonGroup>
        </Col>

        <Col xs={12} lg={6} className="px-0 mb-0">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search Tasks Here" />
          </InputGroup>
        </Col>
      </div>

      <div className="task-wrapper border bg-white border-light shadow-sm py-1 rounded">
        {tasks.map(t =>
          <TaskCardWidget
            {...t}
            key={`task-${t.id}`}
            selectTask={selectTask}
            toggleDoneStatus={toggleDoneStatus}
            deleteTask={id => deleteTasks([id])}
          />
        )}

        <Row className="d-flex align-items-center p-4">
          <Col xs={7} className="mt-1">
            Showing 1 - {tasks.length} of 289
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
