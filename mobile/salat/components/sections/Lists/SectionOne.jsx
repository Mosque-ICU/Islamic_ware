import { useState } from 'react';
import { ArrowNarrowRightIcon, TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/solid';
import {
  Button,
  Card,
  Callout,
  Flex,
  Tab,
  TabList,
  Text,
  Metric,
  Legend,
  LineChart,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react';

const sales = [
  {
    hour: '00:00',
    today: 90,
    average: 66,
    yesterday: 23,
  },
  {
    hour: '02:00',
    today: 45,
    average: 40,
    yesterday: 32,
  },
  // ...
  {
    hour: '23:59',
    today: 43,
    average: 23,
    yesterday: 12,
  },
];

const valueFormatter = number => `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function Example() {
  const [selectedComparison, setSelectedComparison] = useState('average');
  return (
    <Card className="max-w-md mx-auto">
      <Text>Today's Sales</Text>
      <Metric className="mt-1">$ 276</Metric>
      <TabGroup>
        <TabList className="mt-6">
          <Tab>vs. peer average</Tab>
          <Tab>vs. yesterday</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LineChart
              className="mt-4 h-56"
              data={sales}
              index="hour"
              categories={['today', 'average']}
              colors={['blue', 'slate']}
              showYAxis={false}
              showLegend={false}
              valueFormatter={valueFormatter}
              showAnimation={true}
            />
            <Flex justifyContent="end">
              <Legend
                categories={['Today', 'Peer average']}
                colors={['blue', 'slate']}
                className="mt-3"
              />
            </Flex>
            <Callout
              title="7.8% above peer average"
              icon={TrendingUpIcon}
              color="emerald"
              className="mt-4"
            >
              Today's sales currently outperform the sales average of all peer products in North
              West region
            </Callout>
          </TabPanel>
          <TabPanel>
            <LineChart
              className="mt-4 h-56"
              data={sales}
              index="hour"
              categories={['today', 'yesterday']}
              colors={['blue', 'slate']}
              showYAxis={false}
              showLegend={false}
              valueFormatter={valueFormatter}
              showAnimation={true}
            />
            <Flex justifyContent="end">
              <Legend
                categories={['Today', 'Yesterday']}
                colors={['blue', 'slate']}
                className="mt-3"
              />
            </Flex>
            <Callout
              title="-14.8% below yesterday"
              icon={TrendingDownIcon}
              color="rose"
              className="mt-4"
            >
              Today's sales underperform the sales yesterday.
            </Callout>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <Button
        size="sm"
        variant="light"
        icon={ArrowNarrowRightIcon}
        iconPosition="right"
        color="slate"
        className="mt-5"
      >
        View details
      </Button>
    </Card>
  );
}
