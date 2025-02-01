import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { googleapi } from '../googleApi';
import { colors } from '../globals/colors';

const MapPreview = ({ location }) => {
  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?
                          center=${location.lat},${location.long}
                          &zoom=13
                          &size=600x300
                          &maptype=roadmap
                          &markers=color:blue%7Clabel:S%7C${location.lat},${location.long}
                          &key=${googleapi}`;

  return (
    <View style={styles.container}>
      {location.lat ? (
        <Image source={{ uri: mapStaticUrl }} style={styles.image} />
      ) : (
        <Text style={styles.text}>No hay ubicación disponible</Text>
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 320,
    height: 320,
    backgroundColor: colors.darkBlue, 
    
    borderRadius: 10,
    overflow: 'hidden', 
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: colors.lightBlue,
    textAlign: 'center',
  },
});
