
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faChartPie, faChevronDown, faTabletAlt, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { PageTrafficTable } from "../../components/Tables";
import { CircleChartWidget2, LineGraphChartWidget } from "../../components/Widgets";
import { trafficShares2, trafficVolumes } from "../../data/charts";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            Categories <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTabletAlt} className="me-2" /> My App
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faWindowMaximize} className="me-2" /> My Website
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faChartPie} className="me-2" /> Worldwide Traffic
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faBullseye} className="me-2" /> Niche Traffic
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col xs={12} xl={4} className="mb-4">
          <CircleChartWidget2 title="Traffic Share" data={trafficShares2} />
        </Col>
        <Col xs={12} xl={8} className="mb-4">
          <LineGraphChartWidget title="Traffic Volumes by Source" data={trafficVolumes} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-4">
          <PageTrafficTable />
        </Col>
      </Row>
    </>
  );
};
