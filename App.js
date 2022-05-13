import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './components/Search';
import Songs from './components/Songs';
import Song from './components/Song';
import { Provider } from "react-redux";
import store from "./store";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const persistor = persistStore(store);

const Home = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name='Home'
            component={SearchScreen}
          />
          <Stack.Screen
            name='Details'
            component={Song}
          />
        </Stack.Navigator>
      </PersistGate>
    </Provider >
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route, }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Search') {
                  iconName = focused
                    ? 'search'
                    : 'search-outline';
                } else if (route.name === 'Library') {
                  iconName = focused ? "musical-notes" : "musical-notes-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#91A6FF',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name='Search'
              component={Home}
            />
            <Tab.Screen
              name='Library'
              component={Songs}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;