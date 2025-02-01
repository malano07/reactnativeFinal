import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../globals/colors';
import ArrowGoBack from './ArrowGoBack';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { deleteUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { deleteSesion } from '../config/dbSqlite';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSesion();
    dispatch(deleteUser());
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <ArrowGoBack /> : null}
      
      <Image source={require('../../assets/logo_mm7.png')} style={styles.logo} />

      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={24} color={colors.orange} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.orange,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logout: {
    padding: 8,
    backgroundColor: colors.darkBlue,
    borderRadius: 8,
  },
});
