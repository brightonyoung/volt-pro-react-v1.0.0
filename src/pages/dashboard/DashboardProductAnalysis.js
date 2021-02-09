
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { RankingTable } from "../../components/Tables";
import { BarChartWidget2, RatingsWidget, CardWidget, ListChartWidget } from "../../components/Widgets";
import { appRanking } from "../../data/charts";


export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">Share</Button>
          <Button variant="outline-primary" size="sm">Export</Button>
        </ButtonGroup>
      </div>

      <Row>
        <Col xs={12} xl={6} className="mb-4">
          <BarChartWidget2
            title="App Ranking"
            value={155}
            data={appRanking}
          />
        </Col>
        <Col xs={12} xl={6} className="mb-4">
          <Row>
            <Col xs={12} className="mb-4">
              <RatingsWidget />
            </Col>
            <Col xs={12} sm={6} className="mb-4 mb-md-0">
              <CardWidget
                title="Total Installs"
                value="367,567"
                period="Feb 1 - Apr 1"
              />
            </Col>
            <Col xs={12} sm={6}>
              <ListChartWidget />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-4">
          <RankingTable />
        </Col>
      </Row>
    </>
  );
};
