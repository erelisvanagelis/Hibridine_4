import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Card, Button} from 'react-native-elements';
import {Input} from 'react-native-elements/dist/input/Input';

const ProductEditable = ({
  product,
  buttonText,
  onClick,
  buttonTextD,
  onClickD,
}) => {
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
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {buttonText !== null && onClick !== null ? (
          <Button
            title={buttonText}
            onPress={() =>
              onClick({
                id: product.id,
                title: title,
                description: description,
                price: price,
                value: value,
              })
            }
          />
        ) : null}
        {buttonTextD !== null && onClickD !== null ? (
          <Button
            title={buttonTextD}
            onPress={() =>
              onClickD({
                id: product.id,
                title: title,
                description: description,
                price: price,
                value: value,
              })
            }
          />
        ) : null}
      </View>
    </Card>
  );
};
export default ProductEditable;
