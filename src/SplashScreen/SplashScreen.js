import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler,FlatList, Alert, AppState, } from "react-native";
import { Container, Card,List, ListItem, Thumbnail, Text, Button,Header,Content,Left,Body,Right } from "native-base";
import IconNew from 'react-native-vector-icons/dist/Entypo';
import IconNew1 from 'react-native-vector-icons/dist/Fontisto';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ShopScreen extends React.Component {
  static appIsActive = true;
  constructor(props) {
    super(props)
    this.state = {
      FactionList:[
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
    setTimeout(() => {this.props.navigation.navigate("SignInScreen") }, 2000);
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
      <Container style={styles.containerStyle}>
        
        <Image
            resizeMode='contain'
            style={styles.imageStyle}
            source={require('../Images/SplashImg.gif')}
          />
      </Container>
    );
  }
}


const styles = StyleSheet.create({
containerStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#20232a'
},
imageStyle: {
    width: width / 3,
    height: width /3,
  }
});