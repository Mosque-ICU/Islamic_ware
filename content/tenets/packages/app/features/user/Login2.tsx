import React from 'react'
import { YStack, XStack, H2, H5, H3, H4, Input, Button, Paragraph } from '../../../../ui/src'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { KeyboardAvoidingView } from 'react-native'

const Login2 = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding" // Adjust behavior according to your requirements
    >
      <YStack style={{ padding: 30 }} f={1} bg="#FFFFFF" ai="flex-start" jc="space-between">
        <YStack space="$4">
          <XStack w="100%" alignItems="center" justifyContent="space-between">
            <Button icon={ChevronLeft}></Button>
            <H5>Help</H5>
          </XStack>
          <YStack space="$4">
            <H2>What's your email?</H2>
            <Input
              style={{ fontSize: 20 }}
              bg="#FFFFFF"
              size="$2"
              borderWidth={0}
              placeholder="Enter your email..."
            />
          </YStack>
        </YStack>

        <YStack style={{ marginBottom: 50, width: '100%' }} alignItems="center" w="100%">
          <Button
            size="$3"
            borderRadius={'$6'}
            h="$5"
            bg="black"
            theme="active"
            style={{ alignSelf: 'flex-end', marginBottom: 20, width: '100%' }}
          >
            <Paragraph color="white" style={{ fontWeight: '800' }}>
              Continue
            </Paragraph>
          </Button>

          <Button width="50%" size="$2" chromeless>
            Use Phone Number Instead
          </Button>
        </YStack>
      </YStack>
    </KeyboardAvoidingView>
  )
}

export default Login2
