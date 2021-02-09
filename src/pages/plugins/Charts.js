
import React from 'react';
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";
import { trafficVolumes } from "../../data/charts";


export default () => {
  const lineChartSeries = trafficVolumes.map(d => d.value);

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="charts">Charts</h1>
              <p className="fs-5 fw-light">
                Use charts to present complex data with the help of bar charts, pie charts, line charts and many more.
              </p>

              <h2 className="fs-5">Getting started</h2>
              <p>We made sure to use the most advanced and beautiful charts for your business. Volt React makes use of the <Card.Link href="https://www.npmjs.com/package/react-chartist">react-chartist</Card.Link> library and we customized some of the looks to match with the UI that we offer.</p>

              <Documentation
                title="Line chart"
                description={
                  <p>Here’s an example of a line chart:</p>
                }
                scope={{ Chartist, ChartistTooltip, series: lineChartSeries }}
                example={`const labels = ['Mar 16', 'Apr 16', 'May 16', 'Jun 16', 'Jul 16', 'Aug 16', 'Sept 16'];
                
const options = {
  low: 0,
  showArea: false,
  fullWidth: true,
  axisX: {
    position: 'end',
    showGrid: false
  },
  axisY: {
    showGrid: true,
    showLabel: true,
    labelInterpolationFnc: value => \`\${(value / 1)}M\`
  },
  plugins: [ChartistTooltip()]
};

render(
  <Chartist data={{ series, labels }} options={options} type="Line" className="ct-major-tenth" />
);`}
              />

              <Documentation
                title="Line chart filled"
                description={
                  <p>Here’s an example of a line chart filled:</p>
                }
                scope={{ Chartist, ChartistTooltip }}
                example={`const labels = [1, 2, 3, 4, 5, 6, 7, 8];
const series = [[5, 9, 7, 8, 5, 3, 5, 4]];

const options = {
  low: 0,
  showArea: true,
  fullWidth: true,
  plugins: [ChartistTooltip()]
};

render(
  <Chartist data={{ series, labels }} options={options} type="Line" className="ct-major-tenth" />
);`}
              />

              <Documentation
                title="Bar chart"
                description={
                  <p>Here’s an example of a bar chart:</p>
                }
                maxHeight='350px'
                scope={{ Chartist, ChartistTooltip }}
                example={`const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const series = [
  [5, 4, 3, 7, 5, 10, 3],
  [3, 2, 9, 5, 4, 6, 4]
];

const options = {
  low: 0,
  showArea: true,
  fullWidth: true,
  height: '300px',
  axisX: {
    position: 'end'
  },
  axisY: {
    showGrid: false,
    showLabel: false,
    offset: 0
  },
  plugins: [ChartistTooltip()]
};

render(
  <Chartist data={{ series, labels }} options={options} type="Bar" className="ct-golden-section" />
);`}
              />

              <Documentation
                title="Pie chart"
                description={
                  <p>Here’s an example of a pie chart:</p>
                }
                maxHeight='350px'
                scope={{ Chartist, ChartistTooltip, series: lineChartSeries }}
                example={`
const series = [30, 40, 10, 20];

const sum = function(a, b) { return a + b };
const options = {
  low: 0,
  high: 8,
  height: '300px',
  labelInterpolationFnc: function(value) {
    return Math.round(value / series.reduce(sum) * 100) + '%';
  },
  plugins: [ChartistTooltip()]
};

render(
  <Chartist data={{ series }} options={options} type="Pie" className="ct-golden-section" />
);`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
