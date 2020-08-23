// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
//
// import { MAIN_SCREEN } from 'constants/screens';
//
// import MainScreen from 'screens/MainScreen';
//
// const Stack = createStackNavigator();
//
// const AppStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
//   </Stack.Navigator>
// );
//
// export default AppStack;
// //
import React from 'react';

import {
  MAIN_SCREEN,
  MAIN_SCREEN2,
  MAIN_SCREEN3,
  MAIN_SCREEN4,
  MAIN_SCREEN5,
  MAIN_SCREEN6,
} from 'constants/screens';

import MainScreen from 'screens/MainScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'screens/HomeScreen';

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={MAIN_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={MAIN_SCREEN2} component={MainScreen} />
      <Drawer.Screen name={MAIN_SCREEN3} component={MainScreen} />
      <Drawer.Screen name={MAIN_SCREEN4} component={MainScreen} />
      <Drawer.Screen name={MAIN_SCREEN5} component={MainScreen} />
      <Drawer.Screen name={MAIN_SCREEN6} component={MainScreen} />
    </Drawer.Navigator>
  );
}
export default AppStack;
