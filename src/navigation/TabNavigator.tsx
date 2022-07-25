import { useState } from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from '../contexts';
import MainStack from './MainStack';
import Settings from '../screens/Settings';

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
        <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: "none" }, tabBarStyle: { height: 80 }, tabBarLabelStyle: { fontSize: 17 } }}>
          <Tab.Screen name="Home" component={MainStack} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};