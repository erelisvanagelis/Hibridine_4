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
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useState, useEffect} from 'react';
import {useProductList} from '../hooks/useProductList';
import Product from '../components/Product';

const AllProductScreen = () => {
  const productHook = useProductList();

  const callback = (product) => {
      console.log("spaustas")
      console.log(product)
  }
//   useEffect(() => {
//     productHook.refreshList();
//   }, []);

  const renderItem = ({ item }) => (
      <Product product={{
          id:item.id,
          value: item.id,
          title: item.title,
          description: item.description,
          price: item.price
      }} buttonTitle="Delete?" onClick={callback} />
  );

  return (
    <SafeAreaView>
      {/* {productHook.productList.map(product => (
        <Text>product.title</Text>
      ))} */}
      <FlatList
        data={productHook.productList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default AllProductScreen;
