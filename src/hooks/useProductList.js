import {useRecoilState} from 'recoil';
import {productListState} from '../atoms/productListState';
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
    console.log("modifyProduct: ")
    await produtsCollection.doc(product.id).update({
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    });

    const index = productList.findIndex(item => item.id === product.id);
    console.log("index: " + index)
    const clone = [...productList];
    clone[index] = {
      value: product.value,
      title: product.title,
      description: product.description,
      price: product.price,
    };

    setProductList(clone);
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

  function productExists(value) {
    const list = productList.filter(item => item.value === value);
    if (list.length == 0) {
      return null;
    } else {
      return list[0];
    }
  }

  return {
    productList,
    addProduct,
    removeProduct,
    modifyProduct,
    refreshList,
    productExists,
  };
};
