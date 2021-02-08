import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler,FlatList, Alert, AppState, } from "react-native";
import { Container, Card,View, ListItem, Thumbnail, Text, Button,Header,Content,Left,Body,Right } from "native-base";
import IconNew from 'react-native-vector-icons/dist/Entypo';
import IconNew1 from 'react-native-vector-icons/dist/Fontisto';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SellingScreen extends React.Component {
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
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleBackButton = () => {
    this.props.navigation.navigate("HomeScreen")
    return true;
  }

  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left style={styles.left}>
          <IconNew name="chevron-left" size={30} color="#707070" onPress={()=>this.props.navigation.navigate("HomeScreen")}/>
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
              style={{ marginBottom: 30 }}
              numColumns={2}
              data={this.state.FactionList}
              renderItem={({ item }) =>
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
    paddingHorizontal: 10,
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
  cardListStyle: {
    width: width / 2.3,
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#F3F3F3',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.65,
    elevation: 8,
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
  imageStyle: {
    width: width / 2.5,
    height: width / 2.5,
  },
});