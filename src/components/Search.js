import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../globals/colors';
import { useState } from 'react';

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState('');
  const [error, setError] = useState('');

  const search = () => {
    const regex = /[+\-*/%@#&]/;

    if (regex.test(textInput)) {
      return setError('Caracter no válido');
    }
    setError('');
    onChangeKeyword(textInput);
  };

  const removeSearch = () => {
    onChangeKeyword('');
    setTextInput('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholderTextColor={'#FFFFFF'}
          placeholder="Buscar"
        />
        <Pressable style={styles.button} onPress={search}>
          <FontAwesome name="search" size={24} color={colors.lightBlue} />
        </Pressable>
        <Pressable style={styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={24} color={colors.red} />
        </Pressable>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '90%',
    borderWidth: 1,
    borderColor: colors.lightBlue,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#fff',
    paddingVertical: 6,
  },
  button: {
    marginLeft: 10,
    padding: 6,
    borderRadius: 6,
  },
  error: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.red,
    marginTop: 5,
  },
});
