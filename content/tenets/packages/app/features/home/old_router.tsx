import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '../../../../ui/src'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = [
    {
      route: useLink({
        href: '/user/Login1',
      }),
      name: 'Login1',
    },
    {
      route: useLink({
        href: '/user/Login2',
      }),
      name: 'Login2',
    },
    {
      route: useLink({
        href: '/user/Home1',
      }),
      name: 'Home1',
    },
    {
      route: useLink({
        href: '/user/Home2',
      }),
      name: 'Home2',
    },

    {
      route: useLink({
        href: '/user/Home3',
      }),
      name: 'Home3',
    },

    {
      route: useLink({
        href: '/user/Settings',
      }),
      name: 'Settings',
    },
    {
      route: useLink({
        href: '/user/Search',
      }),
      name: 'Search',
    },
    {
      route: useLink({
        href: '/user/Me',
      }),
      name: 'Me',
    },
    {
      route: useLink({
        href: '/user/Player',
      }),
      name: 'Player',
    },
  ]

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's area that takes you from one screen to another. This screen uses the same code on
          Next.js and React Native.
        </Paragraph>

        <Separator />
      </YStack>

      {/*list of all the route for easy nav */}
      <YStack>
        {linkProps.map(function (data) {
          return <Button {...data?.route}>Link to {data?.name} page</Button>
        })}
      </YStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
