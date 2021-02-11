import React, { Component } from 'react';
import { Dimensions,StyleSheet, BackHandler, FlatList,AppState, } from "react-native";
import { Container,Text,  Header, Content, Left, Body, Right } from "native-base";
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import MenuFooter from "../Components/MenuFooter";
import CardComponent from "../Components/CardComponent";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SellingScreen extends Component {
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
            <EntypoIcon name="chevron-left" size={30} color="#707070" onPress={() => this.props.navigation.navigate("HomeScreen")} />
          </Left>
          <Body style={styles.headerTitle}>
            <Text style={styles.headerText}>SELECT YOUR ITEM</Text>
          </Body>
          <Right style={styles.right}>
            <FontistoIcon name="search" size={20} color="#707070" onPress={()=>this.props.navigation.navigate("SearchScreen")}/>
            <FontistoIcon name="heart" size={20} color="red" style={{marginLeft:10}} onPress={()=>this.props.navigation.navigate("WishListScreen")}/>
          </Right>
        </Header>
        <Content style={styles.containerStyle}>

          <Text style={styles.textStyle}>BEST SELLING</Text>
          <FlatList
            style={{ marginBottom: 30 }}
            numColumns={2}
            data={this.state.FactionList}
            renderItem={({ item }) =>
            
              <CardComponent  onPress={() => this.props.navigation.navigate("SingleProduct")}/>
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
  headerStyle: {
    backgroundColor: '#fff',
  },
  left: {
    flex: 1
  },
  headerTitle: {
    flex: 2
  },
  headerText: {
    fontSize: width / 25,
    color: '#6D6D68',
    alignSelf: 'center'
  },
  right: {
    flex: 1
  },
  textStyle: {
    fontSize: width / 25,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 10,
    marginLeft: 10,
  },

});