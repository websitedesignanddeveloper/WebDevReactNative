import React from "react";
import { Dimensions, ImageBackground, Image, StyleSheet, BackHandler, FlatList, Alert, AppState, } from "react-native";
import {  View, Item, Text, Input, } from "native-base";
import FullButton from "../Components/FullButton";
import CheckBox from 'react-native-check-box'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SignInScreen extends React.Component {
    static appIsActive = true;
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    handleBackButton = () => {
        Alert.alert(
            '',
            'Are you sure you want to exit this App? ', [{
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'Yes',
                onPress: () => BackHandler.exitApp()
            },
        ], {
            cancelable: false
        }
        );
        return true;
    }
    GoToNextScreen() {
        this.props.navigation.navigate("HomeScreen")
    }
    render() {
        return (
            <ImageBackground
                style={{ flex: 1, width: null, height: null }}
                source={require('../Images/SignUpBg.png')}
            >
                <View style={styles.overlay}>
                    <View>
                        <View style={styles.viewStyle}>
                            <Image
                                resizeMode='contain'
                                style={styles.imageStyle}
                                source={require('../Images/WhiteGoya.png')}
                            />
                            <Text style={styles.logoTextStyle}>Fastion Way</Text>
                        </View>
                        <Item regular style={styles.itemStyle}>
                            <Input placeholder='User' placeholderTextColor="#FFF" style={{ color: '#FFF' }} />
                        </Item>
                        <Item regular style={styles.itemStyle}>
                            <Input placeholder='Password' placeholderTextColor="#FFF" style={{ color: '#FFF' }} />
                        </Item>
                        <FullButton onPress={this.GoToNextScreen.bind(this)}>SUBMIT</FullButton>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    checkBoxColor='#FFFFFF'
                                    checkedCheckBoxColor='red'
                                    onClick={() => {
                                        this.setState({
                                            isChecked: !this.state.isChecked
                                        })
                                    }}
                                    isChecked={this.state.isChecked}
                                //rightText={"REMEMBER Me"}
                                />
                                <Text style={styles.textStyle}>REMEMBER ME</Text>
                            </View>
                            <Text style={[styles.textStyle]}>LOST YOUR PASSWORD?</Text>
                        </View>
                        <View style={{ height: height / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.registerText}>NOT A MEMBER ? REGISTER</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: height / 3,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoTextStyle: {
        fontSize: width / 30,
        fontWeight: 'bold',
        color: '#FFE600',
        marginLeft: -(width / 5),
        marginTop: -(width / 7)

    },
    itemStyle: {
        marginBottom: 20,
        height: height / 14,
        borderWidth: 3,
        borderColor: '#FFFFFF'
    },
    textStyle: {
        fontSize: width / 35,
        color: '#FFFFFF'

    },
    registerText: {
        fontSize: width / 30,
        color: '#FFFFFF'
    },
    imageStyle:
    {
        width: width / 3,
        height: height / 3,
        marginTop: 30
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#612CB2',
        opacity: 0.6,
        paddingHorizontal: 30,
    }
});