import {useRecoilState} from 'recoil';
import productListState from '../atoms/productListState';
import firestore from '@react-native-firebase/firestore';

const produtsCollection = firestore().collection('products');

export const useProductList = () => {
  const [productList, setProductList] = useRecoilState(productListState);

  async function addProduct(value, title, description, price) {
    const response = await produtsCollection.add({
      value: value,
      title: title,
      description: description,
      price: price,
    });

    setProductList(productList => [
      ...productList,
      {
        id: response.id,
        value: value,
        title: title,
        description: description,
        price: price,
      },
    ]);
  }

  async function removeProduct(id) {
    await produtsCollection.doc(id).delete();
    setProductList(productList => productList.filter(item => item.id !== id));
  }

  async function modifyProduct(product) {
    await produtsCollection.doc(id).update({
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    });

    const index = productList.findIndex(item => item.id === product.id);
    productList[index] = {
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    };

    setProductList(productList);
  }

  async function refreshList() {
    const snapshot = await produtsCollection.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    const products = [];
    snapshot.forEach(doc => {
      products.push({
        ...doc.data(),
        id: doc.id,
      });
      console.log(doc.id, '=>', doc.data());
    });
    setProductList(products);
  }

  return {productList, addProduct, removeProduct, modifyProduct, refreshList};
};
