import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';

export default () => {
  const scheme = useColorScheme();
  console.log({ scheme });
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* content */}
      <MainStack />
    </NavigationContainer>
  );
};