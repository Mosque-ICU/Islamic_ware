import React from 'react'
import { ArrowBigDown, ArrowLeft, User } from '@tamagui/lucide-icons'
import { XStack, Stack, H1, Paragraph, Button, YStack, H2, Group } from '../../../../ui/src'
import { Activity, Airplay } from '@tamagui/lucide-icons'
import { ListItem, Separator, XGroup, YGroup } from 'tamagui'

const styles = {
  boldText: {
    fontWeight: 'bold',
  },
}

const Settings = () => {
  return (
    <Stack padding="$5" style={{ flex: 1 }}>
      <XStack justifyContent="space-between" w="100%">
        <Button circular icon={ArrowLeft} bg="black" />
        <H1>Settings</H1>
        {/* <Button circular icon={ArrowBigDown} bg="black" /> */}
        <Stack></Stack>
      </XStack>

      <Stack>
        <XStack ai="center" space="$2" padding="$5" style={{ flex: 1 }}>
          <Button circular icon={User} bg="black" />
          <YStack>
            <Paragraph style={styles.boldText}>Hello</Paragraph>
            <Paragraph>Hello@gmail.com</Paragraph>
          </YStack>
        </XStack>
      </Stack>

      <Group orientation="vertical">
        <Group.Item>
          <Button jc="flex-start" chromeless>
            General
          </Button>
        </Group.Item>
        <Group.Item>
          <Button jc="flex-start" chromeless>
            Contact & Support
          </Button>
        </Group.Item>
        <Group.Item>
          <Button jc="flex-start" chromeless>
            Subscribe
          </Button>
        </Group.Item>
        <Group.Item>
          <Button jc="flex-start" chromeless>
            Legal
          </Button>
        </Group.Item>
        <Group.Item>
          <Button jc="flex-start" chromeless>
            Log out
          </Button>
        </Group.Item>
      </Group>
      <Paragraph text-allign="center"> v1.0</Paragraph>
    </Stack>
  )
}

export default Settings
