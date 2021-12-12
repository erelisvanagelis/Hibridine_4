/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
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

 import { Text, Card } from 'react-native-elements';
 
 import {useState} from 'react';
import Product from '../components/Product';

 const FoundProductScreen = ({route}) => {
    const {product} = route.params;
   return (
     <SafeAreaView>
         <Product product={product} />
     </SafeAreaView>
   );
 };
 export default FoundProductScreen;