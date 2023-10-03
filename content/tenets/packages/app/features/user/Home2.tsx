import React from 'react'
import { Image, Button, XStack, YStack, Stack, H4, XGroup, SizableText, Paragraph } from 'tamagui'
import { ChevronLeft, CircleEllipsis } from '@tamagui/lucide-icons'
import { BlurView } from 'expo-blur'
import { DialogDemo } from '../../../../ui/components/base/DialogSheet'

const Home2 = (): JSX.Element => {
  return (
    <YStack>
      <Image
        source={{
          uri: 'https://placekitten.com/200/300',
          width: '100%',
          height: 500,
        }}
      />
      <YStack position="absolute" w="100%" h={500} jc="space-between" ai="center">
        <XStack
          padding="$5"
          style={{ width: '100%', padding: 5 }}
          position="absolute"
          jc="space-between"
        >
          <Button circular icon={ChevronLeft} />
          <Button circular icon={CircleEllipsis} />
        </XStack>
        <YStack style={{ marginBottom: 30 }} space="$3" flexGrow={1} jc="flex-end" ai="center">
          <H4>Leaving the Mountain Top</H4>
          <Paragraph opacity={0.5} fontWeight="100">
            After World Youth Day
          </Paragraph>
          <XStack style={{ justifyContent: 'center' }}>
            <DialogDemo
              triggerProp={
                <Button
                  style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: '100%' }}
                  unstyled
                >
                  <BlurView
                    style={{
                      padding: '10px',
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      flexGrow: 1,
                    }}
                    intensity={100}
                  >
                    <YStack>
                      <Paragraph color="white" opacity={0.5} fontSize={10} fontWeight="100">
                        Guide
                      </Paragraph>
                      <SizableText
                        unstyled
                        color="$white"
                        fontFamily="$body"
                        fontSize={20}
                        fontWeight="100"
                        hoverStyle={{
                          color: '$colorHover',
                        }}
                      >
                        Johnathan
                      </SizableText>
                    </YStack>
                  </BlurView>
                </Button>
              }
            >
              <YStack flex={1}>
                <H4>hello</H4>
              </YStack>
            </DialogDemo>
            <DialogDemo
              closeButtonProp={{ text: 'Close' }}
              titleProp="Guide"
              triggerProp={
                <Button
                  style={{
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    width: '100%',
                  }}
                  unstyled
                >
                  <BlurView
                    style={{
                      padding: '10px',
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                      flexGrow: 1,
                    }}
                    intensity={100}
                  >
                    <YStack>
                      <Paragraph color="white" opacity={0.5} fontSize={10} fontWeight="100">
                        Length
                      </Paragraph>
                      <SizableText
                        unstyled
                        color="$white"
                        fontFamily="$body"
                        fontSize={20}
                        fontWeight="100"
                        hoverStyle={{
                          color: '$colorHover',
                        }}
                      >
                        21 min
                      </SizableText>
                    </YStack>
                  </BlurView>
                </Button>
              }
            >
              <H4>hello</H4>
            </DialogDemo>
          </XStack>
        </YStack>
      </YStack>
      <YStack padding="$5" space="$1" flex={1} alignItems="stretch">
        <Stack>
          <Button
            size="$3"
            borderRadius="$6"
            h="$5"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20, width: '100%' }}
          >
            <Paragraph color="white" style={{ fontWeight: '800' }}>
              Play Sessions
            </Paragraph>
          </Button>
        </Stack>
        <Stack>
          <Button
            size="$3"
            borderRadius="$6"
            h="$5"
            bg="grey"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20, width: '100%' }}
          >
            <Paragraph color="white" style={{ fontWeight: '800' }}>
              Pray for an Intention
            </Paragraph>
          </Button>
          <Paragraph fontWeight="100">
            Welcome to the Rise Up Challenge with Bishop Joseph Espaillat. Now that World Youth Day
            has ended, we're going to follow Jesus down the mountain after His Transfiguration and
            hear what happens next in the Gospel of Matthew.
          </Paragraph>
        </Stack>
      </YStack>
    </YStack>
  )
}

export default Home2
