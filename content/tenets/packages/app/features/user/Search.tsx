// Importing necessary modules from React and external libraries
import React from 'react'
import { XStack, Stack, H1, Paragraph, Button, YStack, H2, Group } from '../../../../ui/src'
// import { Search } from '@tamagui/lucide-icons'
import SkeletonLoader from '../../../../ui/components/composite/SkeletonLoader'

// Defining a functional component named Search
const Search = () => {
  // Using React's state to manage a piece of data called 'data'
  const [data, setData] = React.useState(['one', 'two', 'three'])

  // The component's return statement, rendering JSX
  return (
    // Outermost container, a Stack component with spacing and padding
    <Stack space="$5" padding="$10">
      {/* Heading with level 2 */}
      <H2>Search</H2>
      {/* Horizontal Stack (XStack) for a search input field */}
      <XStack
        opacity={0.5}
        borderRadius={10}
        style={{ width: '100%', height: 50, backgroundColor: 'grey' }}
      >
        {/* <Button icon={Search}></Button> */}
        <Paragraph> Prayers,Categories,Quran & More</Paragraph>
      </XStack>
      {/* Vertical Stack for displaying the list of data */}
      <XStack style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* see inside this component on how to render a map */}
        <SkeletonLoader />
      </XStack>
    </Stack>
  )
}

// Exporting the Search component as the default export of this module
export default Search
