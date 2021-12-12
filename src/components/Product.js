import React from 'react';
import {Text, Card, Button} from 'react-native-elements';

const Product = ({product, buttonTitle, onClick}) => {
    console.log(product)
    console.log(buttonTitle)
  return (
    <Card>
      <Card.Title>{product.title}</Card.Title>
      <Card.Divider />
      <Text>{product.description}</Text>
      {/* <Card.Text>{product.description}</Card.Text> */}
      <Card.Divider />
      <Text>Price: {product.price}</Text>
      <Card.Divider />
      <Text>Code: {product.value}</Text>
      <Card.Divider />
      <Button
        title={buttonTitle}
        onPress={() =>
            // console.log("callbakc kelia problemas")
          onClick({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            value: product.value,
          })
        }
      />
    </Card>
  );
};
export default Product;
