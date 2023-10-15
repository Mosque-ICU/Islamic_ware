import {
  Callout,
  Card,
  Text,
  Flex,
  CategoryBar,
  Grid,
  Icon,
  Title,
  Bold,
  ProgressBar,
  List,
  ListItem,
} from '@tremor/react';

import {
  ChevronDoubleRightIcon,
  ExclamationIcon,
  MoonIcon,
  UserIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import SectionOne from '../sections/Lists/SectionTwo';
import SectionTwo from '../sections/Lists/SectionOne';
import SectionFour from '../sections/Lists/SectionFour'

export default function Example() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Grid numItemsSm={1} numItemsLg={1} className="gap-4 ">
        <SectionFour />
        <SectionTwo />
        <SectionOne />
      </Grid>
    </div>
  );
}
