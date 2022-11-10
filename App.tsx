import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BottomBar from './src/components/BottomBar';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/';
import { StatusBar } from 'expo-status-bar';

function App() {
  return <ThemeProvider theme={theme.colors}>
    <StatusBar backgroundColor='transparent' style='light'/>
    <BottomBar/>
  </ThemeProvider>
}

export default App;

declare global {
  type Page = React.FC<NativeStackScreenProps<any>>
}
