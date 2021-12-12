import React, {useState} from 'react';
import {Text, Card, Button} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';

const ProductEditable = ({product, buttonText, onClick}) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [value, setValue] = useState(product.value);

  return (
    <Card>
      <Input
        label="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Card.Divider />
      <Input
        label="Description"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <Card.Divider />
      <Input
        label="Price"
        value={price}
        onChangeText={value => setPrice(value)}
      />
      <Card.Divider />
      <Input
        label="Code"
        value={value}
        onChangeText={value => setValue(value)}
      />
      <Card.Divider />
      <Button
        title={buttonText}
        onPress={() =>
          onClick({
            title: title,
            description: description,
            price: price,
            value: value,
          })
        }
      />
    </Card>
  );
};
export default ProductEditable;
