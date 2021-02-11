import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { Container, Card, Text, Header, Content, Left, Body, Right } from "native-base";
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import WishListItem from "../Components/WishListItem";
const width = Dimensions.get('window').width;

export default class HomeScreen extends Component {
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
  }
  handleBackButton = () => {
    this.props.navigation.navigate("SellingScreen")
    return true;
  }
  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];

    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left style={styles.left}>
            <EntypoIcon name="chevron-left" size={30} color="#707070" onPress={() => this.props.navigation.navigate("SellingScreen")} />
          </Left>
          <Body style={styles.headerTitle}>
            <Image
              resizeMode='contain'
              style={styles.headerImageStyle}
              source={require('../Images/Goya.png')}
            />
          </Body>
          <Right style={styles.right}>
            <FontistoIcon name="search" size={20} color="#707070" onPress={() => this.props.navigation.navigate("SearchScreen")} />
          </Right>
        </Header>
        <Content>
          <Text style={{ color: '#000', padding: 10, fontWeight: 'bold', fontSize: width / 22 }}>My wishlist on Goya Fashion</Text>
          <FlatList
            data={this.state.FactionList}
            style={{ padding: 10 }}
            renderItem={({ item }) =>
              <WishListItem />
            }
            keyExtractor={(item) => item.id}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff'
  },
  left: {
    flex: 1
  },
  headerImageStyle: {
    width: width / 6,
    height: width / 6
  },
  headerTitle: {

    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2
  },
  right: {
    flex: 1
  },
});