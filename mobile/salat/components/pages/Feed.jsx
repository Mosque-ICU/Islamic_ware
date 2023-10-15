// import Image from 'next/image';
// import Card from '../ui/Card';

// import {
//   IonPage,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonButtons,
//   IonButton,
//   IonIcon,
//   IonContent,
//   IonMenuButton,
// } from '@ionic/react';
// import Notifications from './Notifications';
// import { useState } from 'react';
// import { notificationsOutline } from 'ionicons/icons';
// import { getHomeItems } from '../../store/selectors';
// import Store from '../../store';

// const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
//   <Card className="my-4 mx-auto">
//     <div className="h-32 w-full relative">
//       <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
//     </div>
//     <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
//       <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
//       <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
//       <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
//       <div className="flex items-center space-x-4">
//         <div className="w-10 h-10 relative">
//           <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
//         </div>
//         <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
//       </div>
//     </div>
//   </Card>
// );

// const Feed = () => {
//   const homeItems = Store.useState(getHomeItems);
//   const [showNotifications, setShowNotifications] = useState(false);

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Feed</IonTitle>
//           <IonButtons slot="start">
//             <IonMenuButton />
//           </IonButtons>
//           <IonButtons slot="end">
//             <IonButton onClick={() => setShowNotifications(true)}>
//               <IonIcon icon={notificationsOutline} />
//             </IonButton>
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding" fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Feed</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
//         {homeItems.map((i, index) => (
//           <FeedCard {...i} key={index} />
//         ))}
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Feed;

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
import SectionOne from '../sections/Feed/SectionOne';
import SectionThree from '../sections/Feed/SectionThree';

export default function Example() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Grid numItemsSm={1} numItemsLg={1} className="gap-4 ">
        {/* <SectionOne /> */}
        <Card className="max-w-md mx-auto">
          <Flex className="truncate" justifyContent="between">
            <Flex className="truncate" justifyContent="start">
              <Text>
                <Bold>Vienna</Bold>
              </Text>
              <Icon variant="simple" icon={ChevronDoubleRightIcon} size="xs" color="slate" />
              <Text className="truncate">
                <Bold>St. Anton am Arlberg </Bold>
              </Text>
            </Flex>
            <Text color="rose">
              <Bold>Delayed</Bold>
            </Text>
          </Flex>
          <ProgressBar value={65} showAnimation={true} color="rose" className="mt-3" />
          <Flex justifyContent="between" className="mt-3">
            <div>
              <Title>13:30</Title>
              <Text>Sched. 13:30</Text>
            </div>
            <div className="text-right">
              <Title>19:40</Title>
              <Text className="text-right">Sched. 18:55</Text>
            </div>
          </Flex>
          <Callout
            title="+45 minutes behind plan"
            icon={ExclamationIcon}
            color="rose"
            className="mt-6"
          >
            Due to maintenance work, we have a minor delay. If you need assistance with your travels
            today please contact the info hotline.
          </Callout>
        </Card>
        <Card className="max-w-md mx-auto">
          <Flex justifyContent="start">
            <Text>
              <Bold>Nightjet Direction Bregenz</Bold>
            </Text>
            <Icon variant="simple" icon={MoonIcon} size="xs" color="slate" />
          </Flex>
          <Flex justifyContent="between" className="mt-3 space-x-3">
            <Title>22:55</Title>
            <div className="w-full">
              <CategoryBar
                values={[75, 15, 10]}
                markerValue={75}
                colors={['yellow', 'gray', 'gray']}
                showLabels={false}
              />
            </div>
            <Title>10:22</Title>
          </Flex>
          <Flex className="mt-3">
            <div>
              <Flex alignItems="baseline" justifyContent="start" className="space-x-2">
                <Flex justifyContent="start" alignItems="baseline">
                  <Text>1st</Text>
                  <Icon variant="simple" icon={UserIcon} size="xs" color="slate" />
                </Flex>
                <Flex justifyContent="start" alignItems="baseline">
                  <Text>2nd</Text>
                  <Icon variant="simple" icon={UserGroupIcon} size="xs" color="slate" />
                </Flex>
              </Flex>
            </div>
            <Text>11H 22M</Text>
          </Flex>
          <SectionThree />
        </Card>
      </Grid>
    </div>
  );
}
