import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackList} from '../../infrastructure/app.navigation';

type HomeScreenNavigationProp = StackNavigationProp<StackList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
export const HomeScreen = ({navigation}: Props) => {
  const [username, setUsername] = useState<string>();

  const startChat = () => {
    if (username) {
      if (username.length > 2) {
        console.log('Home:', username);
        navigation.navigate('Chat', {name: username});
      } else {
        Toast.show({
          type: 'info',
          text1: 'Try again',
          text2: 'Your username needs to be greater than 2 characters',
          onShow: () => {
            setUsername('');
          },
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Uh oh!',
        text2: 'You need to enter a username',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Chat Hub</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          label="Enter username"
          mode="outlined"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TouchableOpacity style={styles.button} onPress={startChat}>
          <Text style={styles.buttonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#eef1ef',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 48,
    marginTop: 16,
    color: '#0a369d',
  },
  inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0a369d',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
});
