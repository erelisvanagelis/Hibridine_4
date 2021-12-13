import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import {RNCamera} from 'react-native-camera';
import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import {useProductList} from '../hooks/useProductList';

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
  const [camera, setCamera] = useState(null);
  const productHook = useProductList();

  const barcodeDetection = event => {
    if (event.barcodes.length !== 0) {
      camera.pausePreview();
      const data = event.barcodes[0].data;
      const product = productHook.productExists(data);

      if (product == null) {
        navigation.navigate('stack', {
          params: {value: data},
          initial: false,
          screen: 'add',
        });
      } else {
        navigation.navigate('stack', {
          params: {product: product},
          initial: false,
          screen: 'found',
        });
      }
    }
  };

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
          barcodeDetection(event);
        }}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return <PendingView />;
          } else {
            return <ActivityIndicator size="large" />;
          }
        }}
      </RNCamera>
    </SafeAreaView>
  );
};

const CameraScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const productHook = useProductList();

  useEffect(() => {
    productHook.refreshList();
  }, []);

  if (isFocused) {
    return <CameraView navigation={navigation} />;
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
