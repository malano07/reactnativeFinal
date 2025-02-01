import { StyleSheet, View, Image, Text } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { useGetUserQuery } from '../services/user';
import { useSelector } from 'react-redux';
import { colors } from '../globals/colors';

const MyProfile = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.user.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Image
        source={user?.image ? { uri: user.image } : require('../../assets/profile.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <SubmitButton title="Agregar imagen de perfil" onPress={() => navigation.navigate('ImageSelector')} />
      <SubmitButton title="Agregar localización" onPress={() => navigation.navigate('LocationSelector')} />
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{user?.address || 'Sin dirección registrada'}</Text>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
  },
  loadingText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.lightBlue, 
  },
  addressContainer: {
    marginTop: 15,
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
  },
});
