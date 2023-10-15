// import { useEffect, useState } from 'react';
// import {
//   BadgeDelta,
//   Card,
//   DeltaType,
//   DonutChart,
//   Select,
//   SelectItem,
//   Flex,
//   Legend,
//   List,
//   ListItem,
//   Title,
// } from '@tremor/react';

// const regions = [
//   { key: 'all', name: 'All Regions' },
//   { key: 'us', name: 'United States' },
//   { key: 'europe', name: 'Europe' },
//   { key: 'asia', name: 'Asia' },
// ];

// const cities = [
//   {
//     name: 'New York',
//     region: 'us',
//     sales: 984888,
//     delta: '6.1%',
//     deltaType: 'increase',
//   },
//   {
//     name: 'London',
//     region: 'europe',
//     sales: 456700,
//     delta: '1.2%',
//     deltaType: 'moderateDecrease',
//   },
//   {
//     name: 'San Francisco',
//     region: 'us',
//     sales: 240000,
//     delta: '2.3%',
//     deltaType: 'moderateIncrease',
//   },
//   {
//     name: 'Hong Kong',
//     region: 'asia',
//     sales: 390800,
//     delta: '0.5%',
//     deltaType: 'moderateDecrease',
//   },
//   {
//     name: 'Singapore',
//     region: 'asia',
//     sales: 190800,
//     delta: '1.8%',
//     deltaType: 'moderateIncrease',
//   },
//   {
//     name: 'Zurich',
//     region: 'europe',
//     sales: 164400,
//     delta: '3.4%',
//     deltaType: 'decrease',
//   },
//   {
//     name: 'Vienna',
//     region: 'europe',
//     sales: 139800,
//     delta: '3.1%',
//     deltaType: 'moderateIncrease',
//   },
// ];

// const filterByRegion = (region, data) =>
//   region === 'all' ? data : data.filter(city => city.region === region);

// const valueFormatter = number => `$${Intl.NumberFormat('us').format(number).toString()}`;

// export default function SectionOne() {
//   const [selectedRegion, setSelectedRegion] = useState('all');
//   const [filteredData, setFilteredData] = useState(cities);

//   useEffect(() => {
//     const data = cities;
//     setFilteredData(filterByRegion(selectedRegion, data));
//   }, [selectedRegion]);

//   return (
//     <Card className="max-w-md mx-auto">
//       <Flex className="space-x-8" justifyContent="start" alignItems="center">
//         <Title>Sales</Title>
//         <Select onValueChange={setSelectedRegion} placeholder="Region Selection">
//           {regions.map(region => (
//             <SelectItem key={region.key} value={region.key}>
//               {region.name}
//             </SelectItem>
//           ))}
//         </Select>
//       </Flex>
//       <Legend categories={filteredData.map(city => city.name)} className="mt-6" />
//       <DonutChart
//         data={filteredData}
//         category="sales"
//         index="name"
//         valueFormatter={valueFormatter}
//         className="mt-6"
//       />
//       <List className="mt-6">
//         {filteredData.map(city => (
//           <ListItem key={city.name}>
//             {city.name}
//             <BadgeDelta deltaType={city.deltaType} size="xs">
//               {city.delta}
//             </BadgeDelta>
//           </ListItem>
//         ))}
//       </List>
//     </Card>
//   );
// }

import {
  ArrowCircleDownIcon,
  CogIcon,
  MinusCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/solid';

import { Card, Icon, Title, Text, Flex, Tracker, Color, Grid } from '@tremor/react';

const website = [
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'rose', tooltip: 'Downtime' },
  // ...
  { color: 'emerald', tooltip: 'Operational' },
  { color: 'emerald', tooltip: 'Operational' },
];

const categories = [
  {
    title: 'Website',
    metric: '98.3%',
    data: website,
  },
];

export default function Example() {
  return (
    <Card className="max-w-md mx-auto">
      {categories.map(item => (
        <Card key={item.title}>
          <Flex>
            <Title className="w-full">{item.title}</Title>
            <Flex justifyContent="end" className="-space-x-2 -mr-2">
              <Icon icon={CheckCircleIcon} color="emerald" tooltip="Operational" />
              <Icon icon={ArrowCircleDownIcon} color="yellow" tooltip="Degraded" />
              <Icon icon={CogIcon} color="gray" tooltip="Maintenance" />
              <Icon icon={MinusCircleIcon} color="rose" tooltip="Downtime" />
            </Flex>
          </Flex>
          <Flex className="mt-4">
            <Text>Uptime</Text>
            <Text>{item.metric}</Text>
          </Flex>
          <Tracker data={item.data} className="mt-2" />
          <Flex className="mt-2">
            <Text>Jul 14</Text>
            <Text>Aug 23</Text>
          </Flex>
        </Card>
      ))}
    </Card>
  );
}
