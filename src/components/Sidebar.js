
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faClipboardList, faCog, faFileAlt, faHandHoldingUsd, faInbox, faMapMarkedAlt, faSignOutAlt, faTable, faThLarge, faTimes, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const contracted = props.contracted ? "contracted" : "";
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);
  const onMouseEnter = () => props.onMouseEnter && props.onMouseEnter();
  const onMouseLeave = () => props.onMouseLeave && props.onMouseLeave();

  const events = isMobile ? {} : { onMouseEnter, onMouseLeave };

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, target, icon, image, badgeText, badgeBg, badgeColor = "white" } = props;
    const classNames = badgeText ? "d-flex justify-content-between align-items-center" : "";
    const navItemClassName = link === pathname ? "active" : "";

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link as={Link} to={link} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            {!show && contracted && !icon && !image ? (
              <span className="sidebar-text-contracted">{title[0]}</span>
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count">{badgeText}</Badge> : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand as={Link} className="me-lg-5" to={Routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar {...events} className={`${contracted} collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 py-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Volt Pro React" link={Routes.Presentation.path} image={ReactHero} />

              <CollapsableNavItem eventKey="dashboard/" title="Dashboard" icon={faChartPie}>
                <NavItem title="Overview" link={Routes.DashboardOverview.path} />
                <NavItem title="All Traffic" link={Routes.DashboardTraffic.path} />
                <NavItem title="Product Analysis" link={Routes.DashboardProductAnalysis.path} />
              </CollapsableNavItem>

              <NavItem title="Messages" icon={faInbox} badgeText="4" badgeBg="danger" link={Routes.Messages.path} />
              <NavItem title="Users List" icon={faUserCheck} link={Routes.Users.path} />
              <NavItem title="Transactions" icon={faHandHoldingUsd} link={Routes.Transactions.path} />
              <NavItem title="Task List" icon={faClipboardList} link={Routes.Tasks.path} />
              <NavItem title="Settings" icon={faCog} link={Routes.Settings.path} />
              <NavItem title="Calendar" icon={faCalendarAlt} link={Routes.Calendar.path} />
              <NavItem title="Map" icon={faMapMarkedAlt} link={Routes.Map.path} />
              <NavItem title="Widgets" link={Routes.Widgets.path} icon={faThLarge} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="DataTables" link={Routes.Datatables.path} />
                <NavItem title="Bootstrap Tables" link={Routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Pricing" link={Routes.Pricing.path} />
                <NavItem title="Billing" link={Routes.Billing.path} />
                <NavItem title="Invoice" link={Routes.Invoice.path} />
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem title="Forgot password" link={Routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routes.ResetPassword.path} />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem title="500 Server Error" link={Routes.ServerError.path} />
              </CollapsableNavItem>

              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={Routes.DocsQuickStart.path} />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={Routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
                <NavItem title="Widgets" link={Routes.WidgetsComponent.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="plugins/" title="Plugins" icon={faChartPie}>
                <NavItem title="Charts" link={Routes.PluginCharts.path} />
                <NavItem title="Calendar" link={Routes.PluginCalendar.path} />
                <NavItem title="DataTable" link={Routes.PluginDatatable.path} />
                <NavItem title="Map" link={Routes.PluginMap.path} />
                <NavItem title="DropZone" link={Routes.PluginDropzone.path} />
                <NavItem title="SweetAlert" link={Routes.PluginSweetAlert.path} />
              </CollapsableNavItem>

            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
