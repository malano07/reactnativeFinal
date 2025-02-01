import { Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';
import { useDeleteCartProductMutation } from '../services/cart';
import { useSelector } from 'react-redux';

const CardCartProduct = ({ product }) => {
  const { title, description, price, quantity } = product;
  const localId = useSelector(state => state.user.localId);
  const [triggerDeleteItemCart] = useDeleteCartProductMutation();

  const deleteCartProduct = () => {
    triggerDeleteItemCart({ localId, productId: product.id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.containerText}>
          <Text style={styles.text}>Precio: {price}$ ARG</Text>
          <Text style={styles.text}>Cantidad: {quantity}</Text>
        </View>
      </View>
      <Pressable style={styles.trashButton} onPress={deleteCartProduct}>
        <Entypo name="trash" size={28} color={colors.red} />
      </Pressable>
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue, 
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',

    
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.orange,
    marginVertical: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#fff',
  },
  trashButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.darkBlue, 
  },
});
