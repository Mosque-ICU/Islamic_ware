// import {
//   Anchor,
//   Button,
//   H1,
//   Paragraph,
//   Separator,
//   Sheet,
//   useToastController,
//   XStack,
//   YStack,
// } from '@my/ui'
// import React from 'react'

// const Login1 = () => {
//   return (
//     <>
//       <H1>hello</H1>
//     </>
//   )
// }

// export default Login1

import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'

const Login1 = () => {
  //   const image = require('./assets/backgrounds/Artboard1.png')
  const image = {
    uri: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }
  return (
    <>
      <StatusBar />

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* Overlay with red tint */}
        <View style={styles.overlay} />

        <View style={styles.container}>
          <View style={styles.closeButtonView}>
            <TouchableHighlight
              style={[styles.button, styles.closeButton]}
              underlayColor="gray"
              onPress={() => {
                // Handle the close button press
              }}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.hopepraylistView}>
            <TouchableHighlight
              style={[styles.text, styles.hopepraylist]}
              underlayColor="gray"
              onPress={() => {
                // Handle the hopepraylist button press
              }}
            >
              <Text style={[styles.buttonText, styles.hopeText]}>Hope Pray List</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonView}>
            <TouchableHighlight
              style={[styles.button, styles.googleButton]}
              underlayColor="gray"
              onPress={() => {
                // Handle the Google button press
              }}
            >
              <Text style={styles.buttonText}>Continue with Phone or Email</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={[styles.button, styles.appleButton]}
              underlayColor="gray"
              onPress={() => {
                // Handle the Apple button press
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {/* <Image
                  style={{ height: 40, width: 40 }}
                  source={require('./assets/icons/appleLogo.png')}
                /> */}
                <Text style={[styles.buttonText, styles.appleText]}>Continue with Apple</Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.buttonText}>Continue with Google</Text>
            <Text style={styles.buttonText}>By accepting terms and conditions</Text>
          </View>
          {/* <LinearGradient
            colors={['transparent', 'transparent', 'black']}
            style={styles.linearGradient}
          ></LinearGradient> */}
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(60, 0, 255, 0.563)', // Adjust opacity and color as needed
  },
  buttonView: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  closeButton: {
    marginTop: 20,
    width: 60,
    backgroundColor: 'black',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '900',
  },
  googleButton: {
    marginBottom: 10,
    backgroundColor: 'black',
  },
  appleButton: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  closeButtonView: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'flex-end',
  },
  hopepraylistView: {
    position: 'absolute',
    top: 140,
    alignSelf: 'center',
  },
  hopepraylist: {},
  hopeText: {
    color: 'white',
    opacity: 0.5,
    fontSize: 50,
    fontWeight: '900',
  },
  appleText: {
    color: 'black',
  },
  linearGradient: {
    flex: 1,
    zIndex: -1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
})

export default Login1
