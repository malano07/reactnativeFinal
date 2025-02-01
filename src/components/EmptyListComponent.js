import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../globals/colors';

const EmptyListComponent = ({ message }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo_mm7.png')} style={styles.logo} />
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.darkBlue, 
  },
  logo: {
    width: 120,        
    height: 120,
    resizeMode: 'contain', 
    marginBottom: 20,     
  },
  errorMessage: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: colors.orange,  
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EmptyListComponent;
