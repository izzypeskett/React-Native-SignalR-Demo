import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IMessage} from '../features/chat/chat.screen';

type Props = {
  item: IMessage;
};

export const Message = ({item}: Props) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: '#EDEDED',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  message: {
    fontSize: 16,
  },
});
