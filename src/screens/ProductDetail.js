import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { colors } from '../globals/colors';
import { useGetProductCartQuery, usePostCartMutation } from '../services/cart';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Counter from '../components/Counter';
import { useState } from 'react';

const ProductDetail = ({ route }) => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const { product } = route.params;
  const localId = useSelector((state) => state.user.localId);
  const [triggerAddProduct] = usePostCartMutation();
  const { data: productCart } = useGetProductCartQuery({ localId, productId: product.id });

  const increment = () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (quantity >= product.stock - cartQuantity) return;
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleAddProduct = async () => {
    const cartQuantity = productCart ? productCart.quantity : 0;
    if (product.stock - cartQuantity === 0) return;
    const newQuantity = quantity + cartQuantity;
    const cartProduct = {
      ...product,
      quantity: newQuantity,
    };
    await triggerAddProduct({ localId, cartProduct });
    setQuantity(1);
    navigation.navigate('CartStack');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Precio: {product.price} $ ARG</Text>
      {(product.stock - (productCart?.quantity ?? 0)) === 0 ? (
     <Text style={styles.stockWarning}>Producto sin stock</Text>
      ) : (
     <Counter quantity={quantity} increment={increment} decrement={decrement} />
      )}
      <Pressable style={styles.button} onPress={handleAddProduct}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: colors.orange,
    fontWeight: 'bold',
  },
  stockWarning: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.red,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '90%',

   
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textButton: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
