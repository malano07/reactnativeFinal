import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colors } from '../globals/colors';

const Counter = ({ quantity, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrement}>
        <Text style={styles.textButton}>-</Text>
      </Pressable>
      <Text style={styles.text}>{quantity}</Text>
      <Pressable style={styles.button} onPress={increment}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

   
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: colors.lightBlue,
    marginHorizontal: 15,
  },
});
