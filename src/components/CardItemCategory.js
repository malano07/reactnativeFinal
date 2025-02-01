import { StyleSheet, Pressable } from 'react-native';
import ShadowCard from './wrappers/ShadowCard';
import { colors } from '../globals/colors';
import TextPrimary from './TextPrimary';
import { useNavigation } from '@react-navigation/native';

const CardItemCategory = ({ item: category }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        navigation.navigate('ProductsByCategory', { category });
      }}
    >
      <ShadowCard style={styles.container}>
        <TextPrimary style={styles.text}>{category}</TextPrimary>
      </ShadowCard>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  pressable: {
    marginVertical: 5, 
  },
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150, 
    minHeight: 60, 
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: colors.orange,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
