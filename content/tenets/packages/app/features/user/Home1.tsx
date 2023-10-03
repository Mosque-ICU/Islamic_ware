// Import necessary components and modules from 'react-native'
import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'
import { AlertDialog, Button, XStack, YStack, Stack, Paragraph, H5 } from 'tamagui'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { ChevronLeft, CircleEllipsis } from '@tamagui/lucide-icons'

// Define the prop types for the Section component
// type SectionProps = PropsWithChildren<{
//   title: string
// }>

// Section component that takes a title prop and displays content in a specific style
function Section({ children, title }: SectionProps): JSX.Element {
  // Determine the device's color scheme (light or dark)
  // const isDarkMode = useColorScheme() === 'dark'

  return (
    // // A section container that holds the title and content
    // <View style={styles.sectionContainer}>
    //   {/* Title of the section */}
    //   <Text
    //     style={[
    //       styles.sectionTitle,
    //       {
    //         // Set text color based on the color scheme
    //         color: isDarkMode ? Colors.white : Colors.black,
    //       },
    //     ]}
    //   >
    //     {title}
    //   </Text>
    //   {/* Content of the section */}
    //   <Text
    //     style={[
    //       styles.sectionDescription,
    //       {
    //         // Set text color based on the color scheme
    //         color: isDarkMode ? Colors.light : Colors.dark,
    //       },
    //     ]}
    //   >
    //     {children}
    //   </Text>
    // </View>
    <></>
  )
}

// Main App component
function Home1(): JSX.Element {
  // Determine the device's color scheme (light or dark)
  // const isDarkMode = useColorScheme() === 'dark'

  // Define background style based on the color mode
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  return (
    // Main container that provides a safe area for content
    <>
      <XStack
        style={{ zIndex: 1, elevation: 1, width: '100% ', padding: 10 }}
        position="absolute"
        jc="space-between"
      >
        <Button circular icon={ChevronLeft}></Button>
        <Button circular icon={CircleEllipsis}></Button>
      </XStack>
      <Image
        style={{ zIndex: 0 }}
        source={{
          uri: 'https://placekitten.com/200/300',
          width: '100%',
          height: 300,
        }}
      />
      <AlertDialogDemo />
    </>
  )
}

export function AlertDialogDemo() {
  return (
    // <AlertDialog>
    //   <AlertDialog.Trigger asChild>
    //     <Button>Show Alert</Button>
    //   </AlertDialog.Trigger>

    //   <AlertDialog.Portal>
    //     <AlertDialog.Overlay
    //       key="overlay"
    //       animation="quick"
    //       opacity={0.5}
    //       enterStyle={{ opacity: 0 }}
    //       exitStyle={{ opacity: 0 }}
    //     />
    //     <AlertDialog.Content
    //       bordered
    //       style={{ backgroundColor: 'white', position: 'absolute', zIndex: -1 }}
    //       unstyled
    //       elevate
    //       key="content"
    //       animation={[
    //         'quick',
    //         {
    //           opacity: {
    //             overshootClamping: true,
    //           },
    //         },
    //       ]}
    //       enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
    //       exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
    //       x={0}
    //       scale={0.9}
    //       opacity={1}
    //       y={0}
    //     >
    //       <YStack space>
    //         <View style={{ padding: 0, margin: 0 }}>
    //           <Image
    //             source={{
    //               uri: 'https://placekitten.com/200/300',
    //               width: '100%',
    //               height: 300,
    //             }}
    //           />
    //         </View>
    //         <YStack space p="$5">
    //           <AlertDialog.Title>Introducing the Bible and Community on Hallow</AlertDialog.Title>
    //           <AlertDialog.Description>
    //             We heard your requests! We are excited to offer a text-based Bible and the ability
    //             to connect to your faith community!
    //           </AlertDialog.Description>
    //           <XStack space="$3" justifyContent="flex-end">
    //             <AlertDialog.Cancel asChild></AlertDialog.Cancel>
    //             <AlertDialog.Action asChild>
    //               <Button
    //                 size="$3"
    //                 borderRadius={'$6'}
    //                 h="$5"
    //                 bg="black"
    //                 theme="active"
    //                 style={{ alignSelf: 'flex-end', marginBottom: 20, width: '100%' }}
    //               >
    //                 <Paragraph color="white" style={{ fontWeight: '800' }}>
    //                   Continue
    //                 </Paragraph>
    //               </Button>
    //             </AlertDialog.Action>
    //           </XStack>
    //         </YStack>
    //       </YStack>
    //     </AlertDialog.Content>
    //   </AlertDialog.Portal>
    // </AlertDialog>
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button>Show Alert</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          padding={0}
          bordered
          elevate
          //   unstyled
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <Stack style={{ padding: 0, margin: 0 }}>
            <Image
              style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              source={{
                uri: 'https://placekitten.com/200/300',
                width: '100%',
                height: 300,
              }}
            />
          </Stack>
          <YStack space p="$5">
            <AlertDialog.Title>
              Introducing the Bible and Community on Hallow We heard your requests!
            </AlertDialog.Title>
            <AlertDialog.Description>
              We are excited to offer a text-based Bible and the ability // to connect to your faith
              community!
            </AlertDialog.Description>

            <YStack space="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
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
              </AlertDialog.Cancel>

              {/* <Button>Cancel</Button>
              <AlertDialog.Action asChild>
           
              </AlertDialog.Action> */}
            </YStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}

export default Home1
