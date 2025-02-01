import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors } from '../globals/colors';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
        placeholderTextColor={colors.lightBlue} 
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  titleInput: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: colors.darkBlue,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
  },
  error: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.red,
    marginTop: 5,
  },
});

