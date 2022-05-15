import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MainStack from './MainStack';

const Tab = createBottomTabNavigator();
export default () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* content */}
      <MainStack />
    </NavigationContainer>
  );
};