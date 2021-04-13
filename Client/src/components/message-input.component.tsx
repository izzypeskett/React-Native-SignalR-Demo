import React from 'react';
import {TextInput} from 'react-native-paper';

type Props = {
  setMessage: (text: string) => void;
  value: string;
};

export const MessageInput = ({setMessage, value}: Props) => {
  return (
    <TextInput
      label="Type message here"
      onChangeText={setMessage}
      value={value}
      mode="outlined"
    />
  );
};
