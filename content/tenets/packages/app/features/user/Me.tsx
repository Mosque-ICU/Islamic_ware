import type { PropsWithChildren } from 'react'
import React from 'react'
import {useState} from 'react'
import {
  Image,
  Button,
  XStack,
  YStack,
  XGroup,
  YGroup,
  Stack,
  H5,
  H4,
  Group,
  Paragraph,
  ListItem,
  SizableText,
  Tabs,
  TabsContentProps,
  Separator,
  H3,
  H6,
  H2,
} from 'tamagui'
import {
  ChevronRight,
  Clock,
  Cog,
  Ligature,
  Lightbulb,
  Trophy,
  Pencil,
  HelpingHand,
  Smile,
  Star,
  CalendarRange,
  ArrowDownCircle,
  Plus,
  Signal,
  Flame,
} from '@tamagui/lucide-icons'
// export default function Journal(): JSX.Element {
//   return (
//     <Stack flex-flexGrow={1} style={{ width: '100%', height: '100%' }}>
//       <YStack flex-flexGrow={1}>
//         <YStack padding={1} marginTop={5} marginLeft={5}>
//           <H5> Test </H5>
//         </YStack>
//         <YGroup>
//           <YGroup.Item>
//             <ListItem title="Intention" />
//           </YGroup.Item>
//           <YGroup.Item>
//             <ListItem title="Reflection" subTitle="Second subtitle" />
//           </YGroup.Item>
//           <YGroup.Item>
//             <ListItem> MoodChecks</ListItem>
//           </YGroup.Item>
//         </YGroup>
//         
//       </YStack>
//     </Stack>
//   )
// }

const HorizontalTabs = () => {
  return (
    <Tabs
      defaultValue="tab1"
      flexDirection="column"
      orientation="horizontal"
      width="100%"
      flexGrow={1}
      borderRadius="$4"
      // borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        disablePassBorderRadius="end"
        aria-label="Manage your account"
        // separator={<Separator />}
        jc="space-around"
      >
        <Tabs.Tab value="tab1" borderRadius={20}>
          <SizableText>Library</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab2" borderRadius={20}>
          <SizableText>Journal</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="tab3" borderRadius={20}>
          <SizableText>Activity</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      {/* <Separator /> */}
      <TabsContent value="tab1">
        <XStack width="100%" flexGrow={1} jc="space-between">
          <Button chromeless icon={Star}>
            Favourites
          </Button>
          <Button iconAfter={ChevronRight} chromeless />
        </XStack>
        <Separator />
        <XStack width="100%" flexGrow={1} jc="space-between">
          <Button chromeless icon={CalendarRange}>
            Routines
          </Button>
          <Button iconAfter={ChevronRight} chromeless />
        </XStack>
        <YStack
          padding={1}
          marginTop={5}
          marginLeft={5}
          marginBottom={25}
          justifyContent="flex-start"
        >
          <H4>Downloads</H4>
        </YStack>
        <YStack padding={3} justifyContent="center" ai="center">
          <Button circular icon={ArrowDownCircle} />
          <H5> Your Downloads</H5>
          <Paragraph marginLeft={5}>
            Access all your downloads here after tapping the download icon from the more menu on any
            session or collection. Remove them using the same menu.
          </Paragraph>
        </YStack>
      </TabsContent>
      <TabsContent value="tab2">
        <XStack width="100%" flexGrow={1} jc="space-between">
          <Button chromeless icon={HelpingHand}>
            Intentions
          </Button>
          <Button iconAfter={ChevronRight} chromeless />
        </XStack>
        <Separator />
        <XStack width="100%" flexGrow={1} jc="space-between">
          <Button chromeless icon={Pencil}>
            Reflections
          </Button>
          <Button iconAfter={ChevronRight} chromeless />
        </XStack>
        <XStack width="100%" flexGrow={1} jc="space-between">
          <Button chromeless icon={Smile}>
            MoodChecks
          </Button>
          <Button iconAfter={ChevronRight} chromeless />
        </XStack>
        <YStack
          padding={1}
          marginTop={5}
          marginLeft={5}
          marginBottom={25}
          position="relative"
          left={1}
        >
          <H4>Recent Reflections</H4>
        </YStack>
        <YStack padding={3} justifyContent="center" ai="center">
          <Button circular icon={Pencil} />
          <H5> Your Reflections</H5>
          <Paragraph marginLeft={5}>
            add or edit your reflections. You can also post your reflections to your groups.
          </Paragraph>
        </YStack>
      </TabsContent>
      <TabsContent value="tab3">
        <Button width="100%" icon={Plus} marginBottom={1} borderRadius={20}>
          Create a prayer goal
        </Button>

        <XStack flexGrow={1} width="100%" marginTop={15}>
          <XStack jc="space-around" width="100%">
            <YStack>
              <Button
                color="#27574c"
                style={{ backgroundColor: '#68d29f' }}
                circular
                icon={Trophy}
              />
              <H3>00</H3>
              <SizableText
                size="$2"
                borderRadius={5}
                color="#27574c"
                style={{ backgroundColor: '#68d29f' }}
              >
                GOALS COMPLETED
              </SizableText>
            </YStack>
            <YStack>
              <Button
                color="#374ea4"
                style={{ backgroundColor: '#98aeff' }}
                circular
                icon={Clock}
              />
              <H3>00</H3>
              <SizableText
                size="$2"
                borderRadius={5}
                color="#374ea4"
                style={{ backgroundColor: '#98aeff' }}
              >
                MINUTES PRAYED
              </SizableText>
            </YStack>
          </XStack>
        </XStack>
        <XStack flexGrow={1} width="100%" marginTop={5}>
          <XStack jc="space-around" width="100%">
            <YStack>
              <Button
                color="#7347a2"
                style={{ backgroundColor: '#cbb1e9' }}
                circular
                icon={Flame}
              />
              <H3>00</H3>
              <SizableText
                size="$2"
                borderRadius={5}
                color="#7347a2"
                style={{ backgroundColor: '#cbb1e9' }}
              >
                CURRENT STREAK
              </SizableText>
            </YStack>
            <YStack>
              <Button
                color="#7347a2"
                style={{ backgroundColor: '#cbb1e9' }}
                circular
                icon={Signal}
              />
              <H3>00</H3>
              <SizableText
                size="$2"
                borderRadius={5}
                color="#7347a2"
                style={{ backgroundColor: '#cbb1e9' }}
              >
                LONGEST STREAK
              </SizableText>
            </YStack>
          </XStack>
        </XStack>

        <Button width="100%" marginTop={15} borderRadius={20}>
          View prayer activity
        </Button>
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$backgroundColor"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex-grow={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}

const Journal = ({ name }) => {
  return (
    <>
      <XStack marginBottom={15} marginTop={10} marginLeft={15}>
        <H2>Hi {name || 'Hossam'}!</H2>
        <Button
          position="absolute"
          right={1}
          icon={Cog}
          size="$5"
          chromeless
        ></Button>
      </XStack>
      <HorizontalTabs />
      {/* <YStack padding={1} marginTop={5} marginLeft={5} marginBottom={30} >
        <H5>Recent Reflections</H5>
      </YStack>
      <YStack padding={3} justifyContent="center" ai="center">
        <Button circular icon={Pencil} />
        <H5> Your Reflections</H5>
        <Paragraph marginLeft={5}>
          add or edit your reflections. You can also post your reflections to your groups.
        </Paragraph>
      </YStack> */}
    </>
  )
}

export default Journal
