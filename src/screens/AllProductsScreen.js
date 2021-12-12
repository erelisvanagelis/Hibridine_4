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

const AllProductScreen = () => {
  const productHook = useProductList();

  useEffect(() => {
    productHook.refreshList();
  }, []);

  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
    // <Advert advert={item} />
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
