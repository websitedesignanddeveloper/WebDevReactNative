import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler,FlatList, Alert, AppState, } from "react-native";
import { Container, Card,List, ListItem, Thumbnail, Text, Button,Header,Content,Left,Body,Right } from "native-base";
import IconNew from 'react-native-vector-icons/dist/Entypo';
import IconNew1 from 'react-native-vector-icons/dist/Fontisto';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class WishListScreen extends React.Component {
  static appIsActive = true;
  constructor(props) {
    super(props)
    this.state = {
      WishList:[
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
        <Header style={styles.headerStyle}>
          <Left style={styles.left}>
          <IconNew name="chevron-left" size={30} color="#707070" />
          </Left>
          <Body style={styles.headerTitle}>
            <Text style={styles.headerText}>SELECT YOUR ITEM</Text>
          </Body>
          <Right style={styles.right}>
          <IconNew1 name="search" size={25} color="#707070" />

          </Right>
        </Header>
        <Content style={styles.containerStyle}>
        
         <Text style={styles.textStyle}>BEST SELLING</Text>
        <FlatList
          style={{alignSelf:'center',marginBottom:30}}
          numColumns={2}
          data={this.state.WishList}
          renderItem={({item}) =>  
        
        <Card style={styles.cardStyle}>
          <Left>
              {/* <Image
            resizeMode='contain'
            style={styles.imageStyle}
            source={require('./src/Images/Fashion2.jpg')}
          /> */}
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
        </Card>
          }
        keyExtractor={(item) => item.id}
        /> 
        </Content>
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