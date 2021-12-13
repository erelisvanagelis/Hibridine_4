import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {Text, Card, Button} from 'react-native-elements';

const ActivityBar = ({color, text}) => {
  const translation = new Animated.Value(-500);
  useEffect(() => {
    Animated.loop(
        Animated.spring(translation, {
          toValue: 500,
          friction: 1,
          useNativeDriver: true,
          duration: 1000
        }),
        {iterations: 1000},
      ).start();
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        alignSelf: 'stretch',
        textAlign: 'center',
      }}>

      <Animated.View
        style={{
          width: 100,
          height: 20,
          backgroundColor: color,
          transform: [{translateX: translation}],
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
export default ActivityBar;
