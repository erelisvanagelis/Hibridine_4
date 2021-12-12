import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RNCamera} from 'react-native-camera';
import {useState} from 'react';
import {useIsFocused} from '@react-navigation/core';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

const CameraView = ({navigation}) => {
  const [camera, setCamera] = useState(null)

  const barcodeDetection = (event) => {
    if (event.barcodes.length !== 0) {
      console.log(event)
      console.log(event.barcodes)

      camera.pausePreview()
      const data = event.barcodes[0].data
      navigation.navigate('add', { value: data })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={ref => {
          setCamera(ref);
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.torch}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={event => { 
          // console.log(event)
          // console.log(event.barcodes)
          barcodeDetection(event)
        }}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}>
              <TouchableOpacity
                onPress={() => camera.resumePreview()}
                style={styles.capture}>
                <Text style={{fontSize: 14, color: 'red'}}> Begin recognition </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </SafeAreaView>
  );
};

const CameraScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  if (isFocused) {
    return <CameraView navigation={navigation}/>;
  } else {
    return <PendingView />;
  }
};
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
