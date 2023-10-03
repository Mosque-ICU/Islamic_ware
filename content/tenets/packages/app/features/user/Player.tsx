import { Paragraph, Stack, XStack } from '../../../../ui/src'
import React from 'react'

const Player = () => {
  return (
    <Stack style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Assuming '@my/ui' Paragraph component renders a <p> tag */}
      <Paragraph>hello</Paragraph>
      <XStack
        space={'$5'}
        padding={'$5'}
        alignItems="center"
        justifyContent="space-between"
        style={{
          position: 'absolute',
          bottom: 0,
          height: 100,

          width: '100%',
          backgroundColor: 'white',
        }}
      >
        {/* Add content for the inner Stack */}
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
        <Paragraph color="black">Footer content</Paragraph>
      </XStack>
    </Stack>
  )
}

export default Player
