import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Button,View } from "native-base"
const width = Dimensions.get('window').width;
export default function WishListItem({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <Image
                resizeMode='contain'
                style={styles.imageStyle}
                source={require('../Images/Product.jpg')}
            />
            <View style={styles.viewStyle}>
                <Text style={styles.titleStyle}>Elegant Oxford Blazer </Text>
                <Text style={styles.subTitleStyle}>$79.00 $96.00</Text>
                <Text style={styles.colorTextStyle}>Color: Pink</Text>
            </View>
            <View style={{ flex: 1.8, justifyContent: 'center' }}>
                <Button style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Select options</Text>
                </Button>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardListStyle: {
        flexDirection: 'row'
    },
    viewStyle: {
        flex: 2,
        marginTop: 10,
        marginLeft: 10
    },
    titleStyle: {
        fontSize: width / 28,
        fontWeight: 'bold',
        color: '#707070',
    },
    subTitleStyle: {
        fontSize: width / 30,
        color: '#000',
        marginTop: 5
    },
    imageStyle: {
        width: width / 5,
        height: width / 5,
    },
    colorTextStyle: {
        color: '#000',
        fontSize: width / 30,
        fontWeight: 'bold',
        marginTop: 5
    },
    textStyle: {
        fontSize: width / 25,
        color: '#000000',
        marginTop: 10
    },
    buttonStyle: {
        width: width / 3,
        height: width / 9,
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonTextStyle: {
        color: '#FFF',
        fontSize: width / 30
    }
});