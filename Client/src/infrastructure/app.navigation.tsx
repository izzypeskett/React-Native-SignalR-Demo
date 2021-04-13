import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatScreen} from '../features/chat/chat.screen';
import {HomeScreen} from '../features/home/home.screen';

export type StackList = {
  Home: undefined;
  Chat: {name: string};
};

const Stack = createStackNavigator<StackList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
