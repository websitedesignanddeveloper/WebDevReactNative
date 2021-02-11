import React from 'react';
import { StyleSheet,Text,TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;

export default function FullButton({ onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress} >
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={['#000', '#000', '#000']}
        style={styles.button}>
        <Text style={styles.text}>
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    borderRadius: 5,
    elevation: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: width / 20,
    paddingVertical: 12,
    fontWeight: '500'
  },
});