export const runtime = 'edge';

import { headers } from 'next/headers';
import React from 'react';
import HadithView from '../../components/hadithView/HadithView';

function page() {
  return <HadithView />;
}

export default page;
