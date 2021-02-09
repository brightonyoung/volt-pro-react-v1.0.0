
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";
import DashboardTraffic from "./dashboard/DashboardTraffic";
import DashboardProductAnalysis from "./dashboard/DashboardProductAnalysis";
import Messages from "./Messages";
import SingleMessage from "./SingleMessage";
import Users from "./Users";
import Transactions from "./Transactions";
import Tasks from "./Tasks";
import Settings from "./Settings";
import Calendar from "./Calendar";
import MapPage from "./Map";
import Datatables from "./tables/Datatables";
import BootstrapTables from "./tables/BootstrapTables";
import Pricing from "./examples/Pricing";
import Billing from "./examples/Billing";
import Invoice from "./examples/Invoice";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import Lock from "./examples/Lock";
import Widgets from "./examples/Widgets";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// plugin pages
import PluginCharts from "./plugins/Charts";
import PluginCalendar from "./plugins/Calendar";
import PluginDatatable from "./plugins/Datatable";
import PluginMap from "./plugins/Map";
import PluginDropzone from "./plugins/Dropzone";
import PluginSweetAlert from "./plugins/SweetAlert";

// components
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
import WidgetsComponent from "./components/Widgets";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const resize = () => {
    var resize = setInterval(() => {
      window.dispatchEvent(new Event('resize'));
    }, 10);
    setTimeout(function () {
      clearInterval(resize);
    }, 301);
  }

  const localStorageIsContracted = () => {
    return localStorage.getItem('sidebarContracted') === 'false' ? false : true
  }

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [contracted, setContracted] = useState(localStorageIsContracted());
  const [contractSidebar, setContractSidebar] = useState(localStorageIsContracted());
  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleMouseOver = () => {
    if (contracted) {
      setContractSidebar(!contractSidebar);
    }
    resize();
  };

  const toggleContracted = () => {
    setContracted(!contracted);
    setContractSidebar(!contracted);
    localStorage.setItem('sidebarContracted', !contracted);
    resize();
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar
          contracted={contractSidebar}
          onMouseEnter={toggleMouseOver}
          onMouseLeave={toggleMouseOver}
        />

        <main className="content">
          <Navbar toggleContracted={toggleContracted} />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.DashboardTraffic.path} component={DashboardTraffic} />
    <RouteWithSidebar exact path={Routes.DashboardProductAnalysis.path} component={DashboardProductAnalysis} />
    <RouteWithSidebar exact path={Routes.Messages.path} component={Messages} />
    <RouteWithSidebar exact path={Routes.SingleMessage.path} component={SingleMessage} />
    <RouteWithSidebar exact path={Routes.Users.path} component={Users} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Tasks.path} component={Tasks} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.Calendar.path} component={Calendar} />
    <RouteWithSidebar exact path={Routes.Map.path} component={MapPage} />
    <RouteWithSidebar exact path={Routes.Datatables.path} component={Datatables} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />
    <RouteWithSidebar exact path={Routes.Pricing.path} component={Pricing} />
    <RouteWithSidebar exact path={Routes.Billing.path} component={Billing} />
    <RouteWithSidebar exact path={Routes.Invoice.path} component={Invoice} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Widgets.path} component={Widgets} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />
    <RouteWithSidebar exact path={Routes.WidgetsComponent.path} component={WidgetsComponent} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    {/* plugins */}
    <RouteWithSidebar exact path={Routes.PluginCharts.path} component={PluginCharts} />
    <RouteWithSidebar exact path={Routes.PluginCalendar.path} component={PluginCalendar} />
    <RouteWithSidebar exact path={Routes.PluginDatatable.path} component={PluginDatatable} />
    <RouteWithSidebar exact path={Routes.PluginMap.path} component={PluginMap} />
    <RouteWithSidebar exact path={Routes.PluginDropzone.path} component={PluginDropzone} />
    <RouteWithSidebar exact path={Routes.PluginSweetAlert.path} component={PluginSweetAlert} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
