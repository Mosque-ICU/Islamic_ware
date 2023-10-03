import { Button, Paragraph, YStack } from '../../../../ui/src'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import Login1 from './Login1'
import Login2 from './Login2'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from '../home/screen'
import Settings from './Settings'
import Search from './Search'
import Me from './Me'
import Player from './Player'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    // <YStack f={1} jc="center" ai="center" space>
    //   <Paragraph ta="center" fow="700">{`User ID: ${id}`}</Paragraph>
    //   <Button {...link} icon={ChevronLeft}>
    //     Go Home
    //   </Button>
    // </YStack>
    <>
      {id == 'Login1' ? <Login1 /> : null}
      {id == 'Login2' ? <Login2 /> : null}
      {id == 'Home1' ? <Home1 /> : null}
      {id == 'Home2' ? <Home2 /> : null}
      {id == 'Home3' ? <Home3 /> : null}
      {id == 'Settings' ? <Settings /> : null}
      {id == 'Search' ? <Search /> : null}
      {id == 'Me' ? <Me /> : null}
      {id == 'Player' ? <Player /> : null}
    </>
  )
}
