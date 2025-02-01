import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';

const TabBarIcon = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <Entypo name={icon} size={28} color={colors.blue} />
     
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins',
    color: colors.lightGray,
    
  },
});
