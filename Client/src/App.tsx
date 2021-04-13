/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';
import {Navigation} from './infrastructure/app.navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
