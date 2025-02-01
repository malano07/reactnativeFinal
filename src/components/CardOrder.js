import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../globals/colors';

const CardOrder = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dateText}>{order.createdAt}</Text>
        <Text style={styles.totalText}>Total: {order.total} $ ARG</Text>
      </View>
      <AntDesign name="search1" size={28} color={colors.lightBlue} />
    </View>
  );
};

export default CardOrder;

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
  },
  dateText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    marginBottom: 4,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: colors.orange,
  },
});
