import {useRecoilState} from 'recoil';
import productListState from '../atoms/productListState';
import firestore from '@react-native-firebase/firestore';

const produtsCollection = firestore().collection('products');

export const useFoodList = () => {
  const [productList, setProductList] = useRecoilState(productListState);

  function addProduct(value, title, description, price) {
    setProductList(productList => [
      ...productList,
      {
        value: value,
        title: title,
        description: description,
        price: price,
      },
    ]);
  }

  function removeProduct(id) {
    setProductList(productList => productList.filter(item => item.id !== id));
  }

  function modifyProduct(product) {
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

    const products = []
    snapshot.forEach(doc => {
        products.push(
            {
                id: doc.id,
                value: doc.data.value,
                title: doc.data.title,
                description: doc.data.description,
                price: doc.data.price,
            }
        )
      console.log(doc.id, '=>', doc.data());
    });
  }

  return {productList, addProduct, removeProduct, modifyProduct, refreshList};
};
