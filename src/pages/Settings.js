import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCalendarAlt, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Image, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget, NotificationsWidget } from "../components/Widgets";
import { GeneralInfoForm } from "../components/Forms";
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";


export default () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: files => setFiles(files.map(file => ({
      ...file,
      preview: URL.createObjectURL(file)
    })))
  });

  const DropzoneFile = (props) => {
    const { path, preview } = props;

    return (
      <Col xs={6} className="dropzone-preview">
        <Image src={preview} className="dropzone-image" />
        <Card.Text className="dropzone-filename">
          {path}
        </Card.Text>
      </Col>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <span>New</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item>
              <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
            </Dropdown.Item>
            <Dropdown.Item>
              <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
            </Dropdown.Item>
            <Dropdown.Item>
              <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item>
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex">
          <Button as={Link} to={Routes.Calendar.path} variant="primary" className="me-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Button>
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Reports
              <span className="icon icon-small ms-1"><FontAwesomeIcon icon={faChevronDown} /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Products
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faStore} className="me-2" /> Customers
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faCartArrowDown} className="me-2" /> Orders
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faChartPie} className="me-2" /> Console
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon icon={faRocket} className="text-success me-2" /> All Reports
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <GeneralInfoForm />
          <NotificationsWidget />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12} className="mb-4">
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              />
            </Col>
            <Col xs={12} sm={6} xl={12}>
              <Form {...getRootProps({ className: "dropzone rounded d-flex align-items-center justify-content-center mb-4" })}>
                <Form.Control {...getInputProps()} />
                <div className="dz-default dz-message text-center">
                  <p className="dz-button mb-0">Drop files here to upload</p>
                </div>
              </Form>
              <Row className="dropzone-files">
                {files.map(file => <DropzoneFile key={file.path} {...file} />)}
              </Row>
            </Col>
            <Col xs={12} sm={6} xl={12}>
              <ChoosePhotoWidget
                title="Select cover photo"
                photo={ProfileCover}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
