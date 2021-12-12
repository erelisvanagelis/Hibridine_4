import React from 'react';
import { Text, Card, Button } from 'react-native-elements';

const Product = ({product, onClick}) => {
    return (
        <Card>
            <Card.Title>{product.title}</Card.Title>
            <Card.Divider/>
            <Card.Text>{product.description}</Card.Text>
            <Card.Divider/>
            <Card.Text>Price: {product.price}</Card.Text>
            <Card.Divider/>
            <Card.Text>Code: {product.value}</Card.Text>
            <Card.Divider/>
            <Button title="Delete product" onPress={() => onClick(product.id)}/>
        </Card>
    )
}
export default Product