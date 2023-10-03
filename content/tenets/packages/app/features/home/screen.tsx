import React from 'react'
import {
  Image,
  Button,
  XStack,
  YStack,
  Stack,
  H3,
  SizableText,
  H5,
  H2,
  Paragraph,
  H6,
} from 'tamagui'
import { Bell, Calendar, Clock, Download, PlayCircle, Share, Star } from '@tamagui/lucide-icons'
import Random from '../../../../ui/components/composite/HorizontalScrollViewWithVerticalFlatLists'
import ClientOnly from '../../../../ui/components/ClientOnly'
import { gql } from '@apollo/client'
// import { Categories } from '@my/ui/components/cells/Categories'
import Categories_Cell from '../../../../ui/components/cells/Categories_cell'
import Challenges_Cell from '../../../../ui/components/cells/Challenges_cell'
import RecentlyPrayed_Cell from '../../../../ui/components/cells/RecentlyPrayed_cell'
import Routines_Cell from '../../../../ui/components/cells/NightRoutines_cell'
import QuickBreaks_Cell from '../../../../ui/components/cells/QuickBreaks_cell'
import MentalHealthTips_Cell from '../../../../ui/components/cells/MentalHealthTips_cell'
import Lessons_Cell from '../../../../ui/components/cells/Lessons_cell'
import MorningRoutines_Cell from '../../../../ui/components/cells/MorningRoutines_cell'
// import EmojiGrid from '@my/ui/components/composite/EmojiGrid'

const HomePage = (): JSX.Element => (
  <>
    {' '}
    {/* Image top section */}
    <Image
      source={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/mosqueicu-db197.appspot.com/o/tennet%2Ftrust_allah%2Fflooding%20with%20a%20ship%20oil%20painting%20-%205b95d16d.png?alt=media&token=bceca605-4f53-47b0-b563-6a8d8ba7f8e5',
        width: '100%',
        height: 500,
      }}
    />{' '}
    {/* Inside image top section */}
    <YStack position="absolute" w="100%" h={500} jc="space-between" ai="flex-start">
      <YStack position="absolute" w="100%" h={500} jc="center" ai="center">
        <Button elevation="3" size="$10" circular icon={PlayCircle} />
      </YStack>
      <XStack padding="$5" style={{ width: '100%' }} position="absolute" jc="space-between">
        <H2 color="white">Home</H2>
        <Button circular icon={Bell} />
      </XStack>{' '}
      <YStack style={{ marginBottom: 30 }} space="$3" flexGrow={1} jc="flex-end" ai="flex-start">
        <YStack padding="$5" style={{ justifyContent: 'flex-start' }}>
          <Paragraph color="white">Minuets</Paragraph>
          <H3 color="white">Allah, I trust in You</H3>
          <Paragraph color="white">Minuet Meditation</Paragraph>
        </YStack>
      </YStack>
    </YStack>
    {/* Inside the image top section */}
    {/*  */}
    {/* Past the image top section */}
    <YStack padding="$5" space="$4" flex={1} alignItems="stretch">
      {/* Horizontal button group */}
      <XStack space="$2">
        {/* Favourites */}
        <YStack ai="center">
          <Button
            size="$6"
            icon={Star}
            borderRadius="$6"
            h="$5"
            bg="grey"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20 }}
          ></Button>
          <Paragraph style={{ fontWeight: '100' }}>Favourites</Paragraph>
        </YStack>
        {/* Favourites end */}

        {/* Downloads */}
        <YStack ai="center">
          <Button
            icon={Download}
            size="$6"
            borderRadius="$6"
            h="$5"
            bg="grey"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20 }}
          ></Button>
          <Paragraph style={{ fontWeight: '100' }}>Downloads</Paragraph>
        </YStack>
        {/* Downloads end */}

        {/* Routine */}
        <YStack ai="center">
          <Button
            icon={Calendar}
            size="$6"
            borderRadius="$6"
            h="$5"
            bg="grey"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20 }}
          ></Button>
          <Paragraph style={{ fontWeight: '100' }}>Routine</Paragraph>
        </YStack>
        {/* Routine end */}

        {/* Recents */}
        <YStack ai="center">
          <Button
            icon={Clock}
            size="$6"
            borderRadius="$6"
            h="$5"
            bg="grey"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20 }}
          ></Button>
          <Paragraph style={{ fontWeight: '100' }}>Recents</Paragraph>
        </YStack>
        {/* Recents end */}
      </XStack>
      {/* Horizontal button group end */}
      {/*  */}
      {/*   Quote */}
      <Stack ai="center" mt="$10">
        <H5>ST Stephen Of Hungary</H5>
        <H5 unstyled>{`"We must know how to forgive, to live in peace and unity."`}</H5>
        <Stack p="$5" ai="center" space="$3">
          <Button icon={Share} circular></Button>
          <SizableText color="grey" style={{ fontWeight: '600' }} size="$1">
            Share quote
          </SizableText>
        </Stack>
      </Stack>
      {/* Quote end */}
      {/* Challenge */}
      <Stack space="$4">
        <H3>Join the Challenge</H3>
        {/*  */}
        <Challenges_Cell
          query={gql`
            query {
              challenges {
                name
                image
                description
                praying
                daysLeft
              }
            }
          `}
        />
      </Stack>

      {/* <Stack space="$4">
        <H3>Recently prayed</H3>
        <ClientOnly>
          <RecentlyPrayed_Cell
            query={gql`
              query {
                categories {
                  name
                  image
                  description
                }
              }
            `}
          />
        </ClientOnly>
      </Stack> */}

      {/* Community end */}
      {/* Challenge */}
      <Stack space="$4">
        <H3>Morning routines</H3>
        <Stack width="100%" height={'$20'} borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
          <MorningRoutines_Cell
            query={gql`
              query {
                morningRoutines {
                  name
                  image
                  duration
                  description
                }
              }
            `}
          />
        </Stack>
      </Stack>
      {/* Challenge end */}
      {/* Caetory */}
      <Stack space="$4">
        <H3>Explore by Category</H3>
        <ClientOnly>
          {/* <XStack flexWrap="wrap" alignItems="center" justifyContent="center" space="$5"> */}
          {/* theme values */}

          {/* <Countries /> */}
          <Categories_Cell
            query={gql`
              query {
                categories {
                  name
                  image
                  description
                }
              }
            `}
          />

          {/* </XStack> */}
          {/* </XStack>{' '} */}
        </ClientOnly>
        {/* </ScrollView> */}
        {/* </Stack> */}
      </Stack>
      {/* Challenge end */}
      {/* Caetory */}
      <Stack space="$4">
        <H3>For schools</H3>
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
      </Stack>
      {/* Challenge end */}
      {/* Caetory */}
      <Stack space="$4">
        <H3>Featured</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              features {
                name
                image
                duration
                description
              }
            }
          `}
        />
      </Stack>
      {/* Challenge end */}
      {/* Try plus */}
      <Stack space="$4">
        <H3>Tafsir in a Year</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>
      {/* Try plus */}
      <Stack space="$4">
        <H3>Quran in a Year</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>
      {/* Challenge end */}
      {/* Try plus */}
      {/* <Stack space="$4">
        <H3>Night routine</H3>
        <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack>
       
      </Stack> */}
      {/* Challenge end */}
      {/* Try plus */}
      <Stack space="$4">
        <H3>Daily Triva</H3>
        <Stack width="100%" height={'$20'} position="relative">
          {' '}
          {/* Add position="relative" */}
          <Image
            borderRadius={10}
            source={{
              uri: 'https://placekitten.com/200/300',
              width: '100%',
              height: '100%',
            }}
          />
          <Stack
            position="absolute"
            width="100%"
            height={'$20'}
            bg="transparent"
            borderRadius={10}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} // Center the Button
          >
            <Button>
              <H5>start</H5>
            </Button>
          </Stack>
        </Stack>
        <Paragraph color="grey">
          Learn more about your faith through daily trivia and challenge your friends and family by
          sharing your score!
        </Paragraph>
        <XStack space={'$3'}>
          <Button>
            <H5>start</H5>
          </Button>
          <Button>
            <H5>start</H5>
          </Button>
        </XStack>
      </Stack>
      <Stack space="$4">
        <H3>Nightly Routines</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <Routines_Cell
          query={gql`
            query {
              nightRoutines {
                id
                name
                description
                image
                duration
              }
            }
          `}
        />
      </Stack>
      {/*  sleep quran sotries  */}
      <Stack space="$4">
        <H3>Sleep Quran Stories</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Friday Reflections</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Reflect on Scripture</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Tasbeeh</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      <Stack space="$4">
        <H3>Islamic tenets </H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* <Stack space="$4">
        <H3>Ummah Favorites</H3>

        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack> */}

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Mental Health</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Music</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Take a Course </H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Learn </H3>

        <Lessons_Cell
          query={gql`
            query {
              lessons {
                name
                image
                duration
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Novenas</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Kids </H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Quick Break</H3>
        <Stack width="100%" height={'$20'} borderRadius={10}>
          {/* <XStack position="relative" bottom="0"></XStack> */}
          <QuickBreaks_Cell
            query={gql`
              query {
                quickBreaks {
                  name
                  image
                  duration
                  description
                }
              }
            `}
          />
        </Stack>
      </Stack>
      {/* Challenge end */}
      {/* Try plus */}
      {/* <Stack space="$4">
        <H3>How are you feeling today, Hossam?</H3>
        <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
          <EmojiGrid />
        </Stack>
      </Stack> */}
      {/* Challenge end */}
      {/*  */}

      {/* Friday reflections */}
      <Stack space="$4">
        <H3>Not sure where to start?</H3>
        {/* <Stack width="100%" height={'$20'} bg="white" borderRadius={10}>
          <XStack position="relative" bottom="0"></XStack>
        </Stack> */}
        <RecentlyPrayed_Cell
          query={gql`
            query {
              categories {
                name
                image
                description
              }
            }
          `}
        />
      </Stack>
    </YStack>
    {/*Past Image top section end */}
  </>
)

export default HomePage
