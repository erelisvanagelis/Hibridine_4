/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Product from '../components/Product';

const FoundProductScreen = ({route, navigation}) => {
  console.log('FoundProductScreen');
  const {product} = route.params;
  console.log(product);
  const callback = () => {
    navigation.navigate('update', {product: product});
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Product
          product={product}
          buttonTitle="Update product"
          onClick={callback}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default FoundProductScreen;
