/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import ProductEditable from '../components/ProductEditable';
import {useProductList} from '../hooks/useProductList';

const UpdateProductScreen = ({route}) => {
  const {product} = route.params;
  const productHook = useProductList();

  const callback = product => {
    console.log('pasiekia callback');
    console.log(product);
    productHook.removeProduct(product.id);
  };

  const callbackD = product => {
    console.log('pasiekia callbackD');
    console.log(product);
    productHook.modifyProduct(product);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ProductEditable
          product={product}
          buttonText="Delete"
          onClick={callback}
          buttonTextD="Update"
          onClickD={callbackD}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default UpdateProductScreen;
