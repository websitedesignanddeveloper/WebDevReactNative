import React from "react";
import { Dimensions, ImageBackground,Image, StyleSheet, BackHandler, FlatList, Alert, AppState, } from "react-native";
import { Container, Card, List, View, Thumbnail, Item, Text, Input, Header, Content, Left, Body, Right } from "native-base";
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
    GoToNextScreen()
    {
        this.props.navigation.navigate("HomeScreen")
    }
    render() {
        return (
            <ImageBackground
           
            style={{flex:1, paddingHorizontal: 30,}}
            source={require('../Images/SignUpBg.png')}
          >
          
                <View style={styles.viewStyle}>
                <Image
            resizeMode='contain'
            style={styles.imageStyle}
            source={require('../Images/logo.png')}
          />
          <Text style={styles.logoTextStyle}>Goya</Text>
                </View>
                <Item regular style={styles.itemStyle}>
                    <Input placeholder='User' placeholderTextColor="#000" style={{ color: '#000' }} />
                </Item>
                <Item regular style={styles.itemStyle}>
                    <Input placeholder='Password' placeholderTextColor="#000" style={{ color: '#000' }} />
                </Item>
                <FullButton onPress={this.GoToNextScreen.bind(this)}>SUBMIT</FullButton>

                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <CheckBox
                            checkBoxColor='#000'
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
                <View style={{height:height/4,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.registerText}>NOT A MEMBER ? REGISTER</Text>
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
   
    viewStyle: {
        height: height / 3,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    logoTextStyle:{
        fontSize:width/14,
        marginTop:width/8,
        marginLeft:-width/8
    },
    itemStyle: {
        marginBottom: 20,
        height: height / 14,
        borderWidth: 2,
        borderColor: '#000'
    },
    textStyle:{
        fontSize:width/35
    },
    registerText:{
        fontSize:width/30
    },
    imageStyle:
    {
    width:width/3,
    height:height/3
    }
});