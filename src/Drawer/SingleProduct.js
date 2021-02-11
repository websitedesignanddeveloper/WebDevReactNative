import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler, AppState, FlatList, TouchableOpacity, } from "react-native";
import { Container, Card, View, ListItem, Thumbnail, Text, Button, Header, Content, Left, Body, Right } from "native-base";
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CardComponent from "../Components/CardComponent";
import CardFooter from "../Components/CardFooter";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SellingScreen extends React.Component {
  static appIsActive = true;
  constructor(props) {
    super(props)
    this.state = {
      SizeList: [
        { name: 'S' },
        { name: 'M' },
        { name: 'L' },
        { name: 'XL' }
      ],
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
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  handleBackButton = () => {
    this.props.navigation.navigate("SellingScreen")
    return true;
  }

  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left style={styles.left}>
            <EntypoIcon name="chevron-left" size={30} color="#707070" onPress={() => this.props.navigation.navigate("SellingScreen")} />
          </Left>
          <Body style={styles.headerTitle}>
            <Text style={styles.headerText}>POLKA JACKET</Text>
          </Body>
          <Right style={styles.right}>
            <FontistoIcon name="search" size={20} color="#707070" onPress={()=>this.props.navigation.navigate("SearchScreen")}/>
            <Ionicons name="md-cart-outline" size={22} color="#707070" />
          </Right>
        </Header>
        <Content style={styles.containerStyle}>
          <Image
            resizeMode='contain'
            style={styles.imageStyle}
            source={require('../Images/Polka.png')}
          />
          <View style={styles.imageSectionStyle}>
            <View style={styles.circleStyle}>
              <Ionicons name="share-social-outline" size={15} color="#707070" />
            </View>
            <View style={[styles.circleStyle, { marginBottom: 20 }]}>
              <Ionicons name="heart-outline" size={15} color="#707070" />
            </View>
          </View>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>REGULAR JACKET</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.subTitleStyle, { color: '#000', fontWeight: '700' }]}>$30.00 -</Text>
              <Text style={[styles.subTitleStyle, { textDecorationLine: 'line-through' }]}>$98.00</Text>
            </View>
          </View>
          <Text style={[styles.subTitleStyle, { color: '#000', fontWeight: '700' }]}>SELECT SIZE</Text>
          <FlatList
            horizontal
            style={{ margin: 10, paddingBottom: 10, }}
            data={this.state.SizeList}
            renderItem={({ item }) =>
              <View style={styles.sizeBoxStyle}>
                <Text style={styles.sizeTextStyle}>{item.name}</Text>
              </View>
            } />
          <Text style={[styles.subTitleStyle, { color: '#000', fontWeight: '700', marginBottom: 5 }]}>DESCRIPTION</Text>
          <Text style={styles.subTitleStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Text style={[styles.titleStyle, { paddingVertical: 20 }]}>RELETED PRODUCT</Text>
          <FlatList
            style={{ marginBottom: 30 }}
            numColumns={2}
            data={this.state.FactionList}
            renderItem={({ item }) =>
              <CardComponent onPress={() => this.props.navigation.navigate("SingleProduct")} />
            }
            keyExtractor={(item) => item.id}
          />
        </Content>
       <CardFooter onPress={()=>this.props.navigation.navigate("AddToCardScreen")}/>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 15,
  },
  headerStyle: {
    backgroundColor: '#fff'
  },
  left: {
    flex: 1
  },
  headerTitle: {
    flex: 2
  },
  headerText: {
    fontSize: width / 25,
    color: '#707070',
    alignSelf: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginRight: -10
  },
  imageStyle: {
    width: width / 1.1,
    borderRadius: 5,
  },
  imageSectionStyle: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: -80
  },
  circleStyle: {
    width: width / 15,
    height: width / 15,
    borderRadius: (width / 15) / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  viewStyle: {
    paddingVertical: 20
  },
  titleStyle: {
    fontSize: width / 25,
    fontWeight: '700',
    color: '#000000',
    marginLeft: 10,
    marginBottom: 5
  },
  subTitleStyle: {
    fontSize: width / 30,
    color: '#707070',
    marginLeft: 10,
  },
  sizeBoxStyle: {
    width: width / 10,
    height: width / 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D5D5D5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeTextStyle: {
    fontSize: width / 25,
    color: '#000',
    fontWeight: '700'
  }
});