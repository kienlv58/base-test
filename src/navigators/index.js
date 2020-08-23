import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useSession from 'hooks/useSession';
import { APP_STACK, AUTH_STACK } from 'constants/screens';

import { SafeAreaView } from 'react-native-safe-area-context';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const Navigation = () => {
  const { token } = useSession();

  return (
    <NavigationContainer>
      <SafeAreaView />
      {token ? (
        <AppStack />
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
