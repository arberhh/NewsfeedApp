import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import NewsDetail from '../../screens/NewsDetail';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
    </Stack.Navigator>
  );
};

export default MainStack;