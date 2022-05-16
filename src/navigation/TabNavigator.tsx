import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MainStack from './MainStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import { AppContext } from '../contexts';
import { useState } from 'react';

interface GlobalStateInterface {
  mode: string;
  language: string;
}

const Tab = createBottomTabNavigator();
export default () => {
  const scheme = useColorScheme();
  const [globalState, setGlobalState] = useState<GlobalStateInterface>({ mode: scheme, language: "en" });

  return (
    <AppContext.Provider value={{ mode: globalState.mode, language: globalState.language, setGlobalState }}>
      <NavigationContainer theme={globalState.mode === 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: "none" }, tabBarStyle: { paddingBottom: 10 } }}>
          <Tab.Screen name="Home" component={MainStack} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};