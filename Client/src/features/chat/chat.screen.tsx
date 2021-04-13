import React, {useEffect, useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import * as SignalR from '@microsoft/signalr';
import {HubConnection} from '@microsoft/signalr';
import {MessageInput} from '../../components/message-input.component';
import {Message} from '../../components/message.component';
import {StackList} from '../../infrastructure/app.navigation';

type ChatScreenRouteProp = RouteProp<StackList, 'Chat'>;

type Props = {
  route: ChatScreenRouteProp;
};

export type IMessage = {
  username: string;
  message: string;
};

export const ChatScreen = ({route}: Props) => {
  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>('');
  const {name} = route.params;

  useEffect(() => {
    setConnection(
      new SignalR.HubConnectionBuilder()
        .withUrl('http://localhost:5000/hub')
        .build(),
    );
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start().catch(err => console.log(err));
      console.log('Username', name);
      connection.on('ReceiveMessage', (username, msg) => {
        setMessages(m => [...m, {username, message: msg}]);
      });
    }
  }, [connection, name]);

  const saveMessage = (text: string) => {
    setMessage(text);
  };

  const sendMessage = () => {
    if (connection) {
      connection.invoke('SendMessage', name, message).catch(function (err) {
        return console.error(err.toString());
      });
      setMessage('');
    }
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar />

      <View style={styles.chatContainer}>
        <FlatList
          inverted
          data={messages}
          renderItem={({item}) => <Message item={item} />}
          keyExtractor={(item, index) => `${item}-${index}`}
          contentContainerStyle={{flexDirection: 'column-reverse'}}
        />
      </View>

      <KeyboardAvoidingView behavior="position">
        <MessageInput setMessage={saveMessage} value={message} />
      </KeyboardAvoidingView>
      <View>
        <TouchableOpacity onPress={sendMessage} style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    margin: 32,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#cfdee7',
    borderRadius: 16,
  },
  messageContainer: {
    justifyContent: 'flex-end',
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
