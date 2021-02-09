
import React from "react";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";
import { CardWidget, TimelineWidget, BlogCardWidget, CounterWidget, ProfileCardWidget, ProgressTrackWidget, TeamMembersWidget, EventsWidget, RankingWidget, RatingsWidget, NotificationsWidget, OrderHistoryWidget } from "../../components/Widgets";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Widgets</h1>
            <p className="mb-0">
              You can use these cards to show statistics, profiles, events and many more.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Widget card"
          description=""
          scope={{ CardWidget }}
          imports={`import { CardWidget } from "src/components/Widgets";`}
          example={`<CardWidget
  title="Total Installs"
  value="367,567"
  period="Feb 1 - Apr 1"
/>`}
        />

        <Documentation
          title="Counters"
          description=""
          scope={{ Col, CounterWidget, faChartLine }}
          imports={`import { CounterWidget } from "src/components/Widgets";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";`}
          example={`<Col xl={5}>
  <CounterWidget
    category="Customers"
    title="345k"
    period="Feb 1 - Apr 1"
    percentage={18.2}
    icon={faChartLine}
    iconColor="shape-tertiary"
  />
</Col>`}
        />

        <Documentation
          title="Category"
          description=""
          scope={{ Col, RankingWidget }}
          imports={`import { RankingWidget } from "src/components/Widgets";`}
          example={`<Col xl={5}>
  <RankingWidget />
</Col>`}
        />

        <Documentation
          title="Ratings"
          description=""
          scope={{ RatingsWidget }}
          imports={`import { RatingsWidget } from "src/components/Widgets";`}
          example={`<RatingsWidget />`}
        />

        <Documentation
          title="Progress tracker"
          description=""
          scope={{ ProgressTrackWidget }}
          imports={`import { ProgressTrackWidget } from "src/components/Widgets";`}
          example={`<ProgressTrackWidget />`}
        />

        <Documentation
          title="Events"
          description=""
          scope={{ EventsWidget }}
          imports={`import { EventsWidget } from "src/components/Widgets";`}
          example={`<EventsWidget />`}
        />

        <Documentation
          title="Profile card"
          description=""
          scope={{ Col, ProfileCardWidget }}
          imports={`import { ProfileCardWidget } from "src/components/Widgets";`}
          example={`<Col xl={8}>
  <ProfileCardWidget />
</Col>`}
        />

        <Documentation
          title="Profile list"
          description=""
          scope={{ Col, TeamMembersWidget }}
          imports={`import { TeamMembersWidget } from "src/components/Widgets";`}
          example={`<Col xl={8}>
  <TeamMembersWidget />
</Col>`}
        />

        <Documentation
          title="Alerts & Notifications"
          description=""
          scope={{ Col, NotificationsWidget }}
          imports={`import { NotificationsWidget } from "src/components/Widgets";`}
          example={`<Col xl={8}>
  <NotificationsWidget />
</Col>`}
        />

        <Documentation
          title="Invoices"
          description=""
          scope={{ Col, OrderHistoryWidget }}
          imports={`import { OrderHistoryWidget } from "src/components/Widgets";`}
          example={`<Col xl={8}>
  <OrderHistoryWidget />
</Col>`}
        />

        <Documentation
          title="Timeline"
          description=""
          scope={{ Col, TimelineWidget }}
          imports={`import { TimelineWidget } from "src/components/Widgets";`}
          example={`<Col xl={8}>
  <TimelineWidget />
</Col>`}
        />

        <Documentation
          title="Blog card"
          description=""
          scope={{ BlogCardWidget }}
          imports={`import { BlogCardWidget } from "src/components/Widgets";`}
          example={`<BlogCardWidget />`}
        />
      </Container>
    </article>
  );
};
