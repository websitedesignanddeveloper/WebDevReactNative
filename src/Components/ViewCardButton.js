import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const width = Dimensions.get('window').width;

export default function ViewCardButton({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress} >
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                colors={['#612CB2', '#612CB2', '#612CB2']}
                style={styles.button}>
                <Ionicons name="md-cart-outline" size={30} color="#FFFFFF" />
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: width / 20,
        marginLeft: 10,
        fontFamily: 'Raleway-Bold',
        paddingVertical: 12,
        fontWeight: '500'
    },
});