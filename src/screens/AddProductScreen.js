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

import {useState} from 'react';
import ProductEditable from '../components/ProductEditable';
import {useProductList} from '../hooks/useProductList';

const AddProductScreen = ({route}) => {
  const {value} = route.params;
  const productHook = useProductList();
  const callback = product => {
    console.log('pasiekia callback');
    productHook.addProduct(
      product.value,
      product.title,
      product.description,
      product.price,
    );
  };
  return (
    <SafeAreaView>
      <ProductEditable
        product={{
          value: value,
          title: '',
          description: '',
          price: '',
        }}
        buttonText="Add product"
        onClick={callback}
      />
    </SafeAreaView>
  );
};
export default AddProductScreen;
