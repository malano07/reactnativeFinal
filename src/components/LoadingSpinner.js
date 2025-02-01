import React from "react";
import { View, StyleSheet ,ActivityIndicator} from "react-native";

import { colors } from "../globals/colors";


export default function LoadingSpinner() {
  return (
    <View style={styles.container}>
    <ActivityIndicator size={80} color="white"/>
  </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkBlue, 
  },
  animation: {
    width: 150,
    height: 150,
  },
});

