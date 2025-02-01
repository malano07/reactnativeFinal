import { StyleSheet, Text, View, FlatList, Pressable,Image } from 'react-native';
import CardCartProduct from '../components/CardCartProduct';
import { colors } from '../globals/colors';
import { usePostOrdersMutation } from '../services/orders';
import { useSelector } from 'react-redux';
import { useGetCartQuery, useDeleteCartMutation } from '../services/cart';
import { useEffect, useState } from 'react';
import EmptyListComponent from '../components/EmptyListComponent';
import LoadingSpinner from '../components/LoadingSpinner';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const [triggerPost] = usePostOrdersMutation();
  const [triggerDeleteCart] = useDeleteCartMutation();
  const localId = useSelector((state) => state.user.localId);
  const { data: cart, isLoading } = useGetCartQuery({ localId });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart?.length) {
        setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    } else {
        setTotal(0);
    }
}, [cart]);

  const confirmCart = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      products: cart,
      createdAt,
      total,
    };
    triggerPost({ order, localId });
    triggerDeleteCart({ localId });
    navigation.navigate('OrdersStack');
  };

  if (isLoading) return <LoadingSpinner />;
  if (!cart) return <EmptyListComponent message="No hay productos en el carrito" />;

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_mm7.png')} style={styles.logo} />
      <FlatList data={cart} keyExtractor={(item) => item.id} renderItem={({ item }) => <CardCartProduct product={item} />} />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: {total} $ ARG</Text>
        <Pressable style={styles.button} onPress={confirmCart}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 10,
  },
  containerTotal: {
    backgroundColor: colors.blue,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: colors.lightBlue,
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  logo: {
    width: 120,            
    height: 120,
    resizeMode: 'contain', 
    marginBottom: 20,      
  },
});
