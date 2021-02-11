import React from "react";
import { Dimensions, TouchableOpacity, ImageBackground, StyleSheet, BackHandler, Image, Alert, AppState, } from "react-native";
import { View, Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class StartScreen extends React.Component {
  static appIsActive = true;
  constructor(props) {
    super(props)
    this.state = {
      FactionList: [
        {},
        {},
        {},
        {},
        {},
        {},
      ]

    };
  }

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // setTimeout(() => {this.props.navigation.navigate("SignInScreen") }, 2000);
  }


  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleBackButton = () => {
    this.props.navigation.navigate("SplashScreen")
    return true;
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null, height: null }}
        source={require('../Images/SignUpBg.png')}
      >
        <View style={styles.overlay}>
          <View style={styles.viewStyle}>
            <Image
              resizeMode='contain'
              style={styles.imageStyle}
              source={require('../Images/WhiteGoya.png')}
            />
            <Text style={styles.logoTextStyle}>Fastion Way</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              resizeMode='contain'
              style={styles.startImageStyle}
              source={require('../Images/Start.png')}
            />
            <View style={styles.textSectionStyle}>
              <Text style={{ fontSize: width / 13, fontWeight: 'bold', color: '#FFF' }}>Let’s start!</Text>
              <Text style={{ color: '#FFF', marginTop: 5 }}>Continuing you agrreing to the term of use and privacy policy</Text>

            </View>
          </View>
          <TouchableOpacity style={styles.footerSection} onPress={() => this.props.navigation.navigate("SignInScreen")} >
            <Text uppercase={true} style={{ color: '#FFF'}} onPress={()=>this.props.navigation.navigate("SignInScreen")}>Skip</Text>
            <FeatherIcon name="chevron-right" size={20} color="#FFFFFF" onPress={()=>  this.props.navigation.navigate("SignInScreen")}/>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#612CB2',
    opacity: 0.6,
  },
  viewStyle: {

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
  imageStyle:
  {
    width: width / 3,
    height: height / 3,
    marginTop: 30
  },
  startImageStyle:{
    width: width / 1.5,
    height: width / 1.5,
     marginTop: -40
  },
  textSectionStyle:{
    marginLeft: -(width / 3.5), 
    marginTop: 65,
    width: width / 2 
  },
  footerSection:{
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
     marginTop: (width / 2.2), 
     flexDirection: 'row',
      marginRight: 5
  }
});