import React from "react";
import { Dimensions, TouchableOpacity,ImageBackground, StyleSheet, BackHandler, Image, Alert, AppState, } from "react-native";
import { View, Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ShopScreen extends React.Component {
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
          <TouchableOpacity style={{ marginTop: (width / 2), alignSelf: 'flex-end' ,flexDirection:'row',marginRight:5}} onPress={() => this.props.navigation.navigate("StartScreen")} >
            <Text uppercase={true} style={{ color: '#FFF' }}>start shopping </Text>
            <FeatherIcon name="arrow-right" size={20} color="#FFFFFF" />
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    marginTop: (width / 2),
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
});