import { StyleSheet, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../globals/colors';

const ArrowGoBack = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={28} color={colors.lightBlue} />
    </Pressable>
  );
};

export default ArrowGoBack;

const styles = StyleSheet.create({
  goBack: {
    position: 'absolute',
    top: 15, 
    left: 15,
    padding: 10, 
    backgroundColor: colors.blue, 
    borderRadius: 50, 
    shadowColor: colors.darkBlue, 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
});
