import { View } from 'native-base';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';

export default function MenuFooter({ onPress, children }) {
  return (
    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
      <FeatherIcon name="menu" size={25} color="#707070" onPress={onPress} />
      <FontAwesomeIcon name="user-circle-o" size={25} color="#707070" />
    </View>
  );
}
