
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Breadcrumb } from '@themesberg/react-bootstrap';

import { RankingTable, PageVisitsTable, PageTrafficTable } from "../../components/Tables";
import { GeneralInfoForm, CardDetailsForm, DropFilesForm } from "../../components/Forms";
import { CounterWidget, BlogCardWidget, OrderHistoryWidget, ChangePlanWidget, VisitsMapWidget, TimelineWidget, ChoosePhotoWidget, ProfileCardWidget, AcquisitionWidget, EventsWidget, RankingWidget, ProgressTrackWidget, CircleChartWidget, TeamMembersWidget, BarChartWidget, PieChartWidget, DognutChartWidget, SalesValueWidget, CircleChartWidget2, LineGraphChartWidget, BarChartWidget2, RatingsWidget, CardWidget, ListChartWidget, NotificationsWidget, PriceCardWidget } from "../../components/Widgets";
import { appRanking, trafficShares, totalOrders, trafficBySource, trafficShares2, trafficDistribution, trafficVolumes } from "../../data/charts";

import pricings from "../../data/pricings";
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import ProfileCover from "../../assets/img/profile-cover.jpg";


export default () => (
  <>
    <Row className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
      <Col className="d-block mb-4 mb-xl-0">
        <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
          <Breadcrumb.Item>Volt</Breadcrumb.Item>
          <Breadcrumb.Item active>Widgets</Breadcrumb.Item>
        </Breadcrumb>
        <h4>Widgets</h4>
        <p className="mb-0">
          You can easily show your stats content by using these cards.
        </p>
      </Col>
    </Row>

    <Row className="justify-content-md-center">
      <Col xs={12} sm={6} xl={4} className="mb-4">
        <CounterWidget
          category="Customers"
          title="345k"
          period="Feb 1 - Apr 1"
          percentage={18.2}
          icon={faChartLine}
          iconColor="shape-tertiary"
        />
      </Col>

      <Col xs={12} sm={6} xl={4} className="mb-4">
        <CounterWidget
          category="Revenue"
          title="$43,594"
          period="Feb 1 - Apr 1"
          percentage={28.4}
          icon={faCashRegister}
          iconColor="shape-quaternary"
        />
      </Col>

      <Col xs={12} sm={6} xl={4} className="mb-4">
        <CircleChartWidget
          title="Traffic Share"
          data={trafficShares} />
      </Col>

      <Col xs={12} sm={6} xl={4} className="mb-4">
        <BarChartWidget
          title="Total orders"
          value={452}
          percentage={18.2}
          data={totalOrders} />
      </Col>

      <Col xs={12} lg={6} xl={4} className="mb-4">
        <PieChartWidget
          title="Traffic by Source"
          data={trafficBySource} />
      </Col>

      <Col xs={12} lg={6} xl={4} className="mb-4">
        <DognutChartWidget
          title="Organic vs Paid Search"
          value="Trafic Distibution"
          percentage={10.57}
          data={trafficDistribution} />
      </Col>

      <Col xs={12} className="mb-4">
        <SalesValueWidget
          title="Sales Value"
          value="10,567"
          percentage={10.57}
        />
      </Col>

      <Col xs={12} xl={4} className="mb-4">
        <CircleChartWidget2 title="Traffic Share" data={trafficShares2} />
      </Col>

      <Col xs={12} xl={8} className="mb-4">
        <LineGraphChartWidget title="Traffic Volumes by Source" data={trafficVolumes} />
      </Col>
    </Row>

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

    <Row>
      <Col xs={12} xl={8} className="mb-4">
        <Row>
          <Col xs={12} className="mb-4">
            <PageVisitsTable />
          </Col>

          <Col xs={12} lg={6} className="mb-4">
            <TeamMembersWidget />
          </Col>

          <Col xs={12} lg={6} className="mb-4">
            <ProgressTrackWidget />
          </Col>

          <Col xs={12}>
            <EventsWidget />
          </Col>
        </Row>
      </Col>

      <Col xs={12} xl={4} className="mb-4">
        <Col xs={12} className="px-0 mb-4">
          <RankingWidget />
        </Col>

        <Col xs={12} className="col-12 px-0 mb-4">
          <AcquisitionWidget />
        </Col>

        <Col xs={12} className="px-0">
          <VisitsMapWidget />
        </Col>
      </Col>
    </Row>

    <Row>
      <Col xs={12} xl={8} className="mb-4">
        <Row>
          <Col xs={12}>
            <GeneralInfoForm />
            <CardDetailsForm />
            <NotificationsWidget />
          </Col>
        </Row>
      </Col>

      <Col xs={12} xl={4} className="mb-4">
        <Col xs={12} className="px-0">
          <ProfileCardWidget />
          <ChoosePhotoWidget
            title="Select profile photo"
            photo={Profile3}
          />

          <DropFilesForm />

          <ChoosePhotoWidget
            title="Select cover photo"
            photo={ProfileCover}
          />

          <PriceCardWidget {...pricings[1]} />
        </Col>
      </Col>
    </Row>

    <Row>
      <Col xs={12} className="mb-4">
        <PageTrafficTable />
      </Col>
    </Row>

    <Row className="mb-4">
      <Col xs={12} lg={6}>
        <ChangePlanWidget />
      </Col>
      <Col xs={12} lg={6}>
        <OrderHistoryWidget />
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={6}>
        <TimelineWidget />
      </Col>

      <Col xs={12} lg={6}>
        <BlogCardWidget />
      </Col>
    </Row>
  </>
);
