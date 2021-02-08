import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler,FlatList, Alert, AppState, } from "react-native";
import { Container, Card,List, ListItem, Thumbnail, Text, Button,Header,Content,Left,Body,Right } from "native-base";
import IconNew from 'react-native-vector-icons/dist/Entypo';
import IconNew1 from 'react-native-vector-icons/dist/Fontisto';
import AppIntroSlider from 'react-native-app-intro-slider';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ShopScreen extends React.Component {
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

  render() {
    return (
      <Container>
       
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
  },
  headerStyle:{
  backgroundColor:'#fff'
  },
  left:{
    flex:1
  },
  headerTitle:{
    flex:2
  },
  headerText:{
    fontSize: width / 25,
    color:'#707070',
    alignSelf:'center'
  },
  right:{
    flex:1
  },
  textStyle: {
    fontSize: width / 25,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical:10,
    marginLeft: 10,
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
  cardStyle: {
    width: width / 2.4,
    borderRadius: 5,
    marginLeft: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
  },
  viewStyle: {
    paddingVertical: 20
  },
  imageStyle: {
    width: width / 5,
    height: width /5,
  }
});