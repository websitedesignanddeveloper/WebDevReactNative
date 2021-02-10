import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import {Card,View} from "native-base"
const width = Dimensions.get('window').width;
export default function CardComponent({onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <Card style={styles.cardListStyle}>
      <Image
        resizeMode='contain'
        style={styles.imageStyle}
        source={require('../Images/Fashion.png')}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>Cashmere Tank + Bag</Text>
        <Text style={styles.subTitleStyle}>$30.00 - $98.00</Text>
      </View>
    </Card>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardListStyle: {
        width: width / 2.35,
        borderRadius: 5,
        marginLeft: 10,
        backgroundColor: '#F3F3F4',
        shadowColor: "rgba(111, 111, 111, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.60,
        shadowRadius: 5.65,
        elevation: 6,
      },
      viewStyle:{
        paddingVertical:20
      },
      titleStyle: {
        fontSize: width / 30,
        fontWeight: 'bold',
        color: '#707070',
        marginLeft: 10,
      },
      subTitleStyle: {
        fontSize: width / 35,
        color: '#707070',
        marginLeft: 10,
      },
      imageStyle: {
        width: width / 2.5,
        height: width / 2.5,
      },
});