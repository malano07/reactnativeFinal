
import { colors } from '../globals/colors';
import { Animated, Pressable, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ title, onPress }) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
      Animated.spring(scaleValue, { toValue: 0.95, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
      Animated.spring(scaleValue, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
      <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={onPress}
          style={styles.button}
      >
          <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
              <Text style={styles.text}>{title}</Text>
          </Animated.View>
      </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.orange,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%', 

   
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#fff', 
    textTransform: 'uppercase',
  },
});

