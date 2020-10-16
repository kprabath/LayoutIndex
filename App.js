import * as React   from 'react';
import {View, Text , } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Containers/HomeScreen';


const Stack = createStackNavigator();

function App() {

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'User Information',
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
