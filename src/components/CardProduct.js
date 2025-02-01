import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { colors } from '../globals/colors';
import { useNavigation } from '@react-navigation/native';

const CardProduct = ({ product }) => {
  const { title, price, stock, thumbnail } = product;
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('ProductDetail', { product })}>
      <Image style={styles.image} source={{ uri: thumbnail }} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerText}>
          <Text style={width > 400 ? styles.text : styles.textMin}>Precio: {price} $ ARG</Text>
          <Text style={width > 400 ? styles.text : styles.textMin}>Stock: {stock}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 12,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
  },
  textMin: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#fff',
  },
});
