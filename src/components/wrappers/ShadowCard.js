import { StyleSheet, View, Platform } from 'react-native';
import { colors } from "../../globals/colors";

const ShadowCard = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ShadowCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,

    
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    
    ...(Platform.OS === 'web' ? { boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)" } : {}),

    elevation: 6, 
  },
});
