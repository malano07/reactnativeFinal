import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../globals/colors';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import { loginSchema } from '../validations/loginSchema';
import { deleteSesion, insertSession } from '../config/dbSqlite';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const response = await triggerLogin({ email, password });

      const user = {
        email: response.data.email,
        idToken: response.data.idToken,
        localId: response.data.localId,
      };
      dispatch(setUser(user));
      await deleteSesion();
      await insertSession(user.localId, user.email, user.idToken);
    } catch (error) {
      switch (error.path) {
        case 'email':
          setEmailError(error.message);
          setPasswordError('');
          break;
        case 'password':
          setPasswordError(error.message);
          setEmailError('');
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresar</Text>
        
        <InputForm 
          label="Email" 
          value={email} 
          onChangeText={(t) => setEmail(t)} 
          isSecure={false} 
          error={emailError} 
          style={styles.input}  
        />
        
        <InputForm 
          label="Password" 
          value={password} 
          onChangeText={(t) => setPassword(t)} 
          isSecure={true} 
          error={passwordError} 
          style={styles.input} 
        />
        
        <SubmitButton onPress={onSubmit} title="Ingresar" style={styles.button} />
        
        <Text style={styles.sub}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.subLink}>Registrarme</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: colors.blue,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: colors.lightBlue,
    marginBottom: 15,
  },
  input: {
    width: '100%',           
    paddingVertical: 12,     
    paddingHorizontal: 15,   
    marginBottom: 15,      
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    color: '#fff',          
    fontFamily: 'Poppins',
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.lightBlue,
  },
  button: {
    width: '100%',       
  },
  sub: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
    marginTop: 15,
  },
  subLink: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: colors.orange,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
