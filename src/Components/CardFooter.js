import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {View,Text} from "native-base";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function CardFooter({onPress, children }) {
  return (
  <View style={{flexDirection:'row',}}>
<View style={styles.viewStyle}>
<Ionicons name="md-cart-outline" size={30} color="#612CB2" />
<Text style={[styles.textStyle,{color:'#612CB2'}]}>ADD TO CARD</Text>
</View>
<View style={[styles.viewStyle,{backgroundColor:'#612CB2'}]}>
<Ionicons name="ios-basket-outline" size={30} color="#FFF" />
<Text style={[styles.textStyle,{color:'#FFFFFF'}]}>BUY NOW</Text>
</View>
  </View>
  );
}

const styles = StyleSheet.create({
 viewStyle:{
   height:width/6.5,
  flex:2,
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
 },
 textStyle:{
  fontSize:width/25,
  marginLeft:5
 }
});