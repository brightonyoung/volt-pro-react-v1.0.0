
import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { Col, Row, Card, Button, Form, Breadcrumb } from '@themesberg/react-bootstrap';
import Table from "react-bootstrap-table-next";
import Pagination, { PaginationListStandalone, PaginationProvider, PaginationTotalStandalone, SizePerPageDropdownStandalone } from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import jobs from "../../data/jobs";
import { Routes } from "../../routes";


export default () => {
  const history = useHistory();

  const columns = [
    { dataField: "id", text: "ID", hidden: true },
    { dataField: "name", text: "Name" },
    { dataField: "position", text: "Position" },
    { dataField: "office", text: "Office" },
    { dataField: "age", text: "Age" },
    { dataField: "startDate", text: "Start date" },
    { dataField: "salary", text: "Salary", formatter: (cell) => <span>${cell}</span> }
  ];

  const goToDatatablesDocs = () => {
    history.push(Routes.PluginDatatable.path);
  };

  const customTotal = (from, to, size) => (
    <div>
      Showing {from} to {to} of {size} entries
    </div>
  );

  const customSizePerPage = (props) => {
    const { options, currentSizePerPage, onSizePerPageChange } = props;

    const onPageChange = (e) => {
      const page = e.target.value;
      onSizePerPageChange(page);
    }

    return (
      <Row>
        <Col xs="auto">
          <Form.Select value={currentSizePerPage} onChange={onPageChange} className="pe-5">
            {options.map(o => (
              <option key={o.page} value={o.page}>
                {o.text}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          entries per page
        </Col>
      </Row>
    );
  };

  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>DataTables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>DataTables (Vanilla JS)</h4>
          <p className="mb-0">
            Dozens of reusable components built to provide buttons, alerts, popovers, and more.
          </p>
        </div>
        <div>
          <Button variant="outline-gray" onClick={goToDatatablesDocs}>
            <FontAwesomeIcon icon={faQuestionCircle} className="me-1" /> DataTables Docs
          </Button>
        </div>
      </div>

      <ToolkitProvider
        keyField="id"
        search={true}
        columns={columns}
        data={jobs}
        wrapperClasses="table-responsive"
      >
        {({ baseProps, searchProps }) => (
          <PaginationProvider pagination={
            Pagination({
              custom: true,
              showTotal: true,
              alwaysShowAllBtns: true,
              totalSize: jobs.length,
              paginationTotalRenderer: customTotal,
              sizePerPageRenderer: customSizePerPage
            })
          }>
            {({ paginationProps, paginationTableProps }) => (
              <Card>
                <div className="table-responsive py-2">
                  <Card.Header>
                    <Row>
                      <Col xs={12} md={6} className="py-1">
                        <SizePerPageDropdownStandalone {...paginationProps} />
                      </Col>
                      <Col xs={12} md={6} className="d-flex justify-content-md-end py-1">
                        <Search.SearchBar {...searchProps} />
                      </Col>
                    </Row>
                  </Card.Header>

                  <Table {...baseProps} {...paginationTableProps} />

                  <Card.Footer>
                    <Row>
                      <Col xs={12} md={6} className="d-flex align-items-center py-1">
                        <PaginationTotalStandalone {...paginationProps} />
                      </Col>
                      <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center mb-0 py-1">
                        <PaginationListStandalone {...paginationProps} />
                      </Col>
                    </Row>
                  </Card.Footer>
                </div>
              </Card>
            )}
          </PaginationProvider>
        )}
      </ToolkitProvider>
    </>
  );
};
