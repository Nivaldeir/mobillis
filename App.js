import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/Home'
import { Feather, Entypo, SimpleLineIcons } from '@expo/vector-icons'
import Button from './src/components/Button';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: '#1C8BEB',
      tabBarInactiveTintColor: '#828486',
    }}

    >
      <Tab.Screen name="Main" component={HomeScreen} options={{
        title: 'Principal',
        tabBarIcon: (({ size, color }) => <Feather name="home" size={size} color={color} />)
      }} />
      <Tab.Screen name="Transactions" component={HomeScreen} options={{
        title: 'Transações',
        tabBarIcon: (({ size, color }) => <Entypo name="list" size={size} color={color} />)
      }} />
      <Tab.Screen name="Add" component={HomeScreen} options={{
        title: '',
        tabBarIcon: (({ size, color }) => (
          <Button />
        ))
      }} />
      <Tab.Screen name="Plan" component={HomeScreen} options={{
        title: 'Planejamento',
        tabBarIcon: (({ size, color }) => <SimpleLineIcons name="wallet" size={size} color={color} />)
      }} />
      <Tab.Screen name="More" component={HomeScreen} options={{
        title: 'Mais',
        tabBarIcon: (({ size, color }) => <Entypo name="dots-three-horizontal" size={size} color={color} />)
      }} />
    </Tab.Navigator >
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
}

export default App;