import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import {Card,View} from "native-base"
const width = Dimensions.get('window').width;
export default function ProductListItem({onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}}>
  
      <Image
        resizeMode='contain'
        style={styles.imageStyle}
        source={require('../Images/Product.jpg')}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Abstract Print Cotton Blouse </Text>
        <Text style={styles.subTitleStyle}>X1</Text>
      </View>
      <View style={{flex:1,}}>
      <Text style={styles.textStyle}>$39.00</Text>
      </View>

  
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardListStyle: {
       flexDirection:'row'
      },
      viewStyle:{
        flex:2,
        marginTop:10
      },
      titleStyle: {
        fontSize: width / 30,
        fontWeight: 'bold',
        color: '#707070',
        marginLeft: 10,
        marginBottom:10
      },
      subTitleStyle: {
        fontSize: width / 30,
        color: '#000',
        backgroundColor:'#C4C4C4',
        textAlign:'center',
        borderRadius:20,
        width:45,
        height:20,
        marginLeft: 10,
      },
      imageStyle: {
        width: width / 3.5,
        height: width / 3.5,
      },
      textStyle: {
        fontSize: width / 25,
        color: '#000000',
        marginTop:10
    },
});