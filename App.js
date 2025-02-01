import { StatusBar } from 'react-native';
import { colors } from './src/globals/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/globals/fonts';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/store';
import * as SplashScreen from 'expo-splash-screen';
import {  useEffect } from 'react';

// Evita que la pantalla de carga se oculte antes de que las fuentes estén listas
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // No renderizar la app hasta que las fuentes carguen
  }

  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>

      <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
    </>
  );
}
