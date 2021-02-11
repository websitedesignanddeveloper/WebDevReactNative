import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TouchableOpacity, BackHandler, Alert, ImageBackground } from 'react-native';
import { Container, Card, Text, Header, Content, Left, Body, Right, Input, Item, Button } from "native-base";
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import ImageSlider from 'react-native-image-slider';
import CardComponent from "../Components/CardComponent";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MenuFooter from "../Components/MenuFooter";
import Modal from 'react-native-modal';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      CategoryList: [
        {
          img: require('../Images/TOP.png'),
          name: 'TOP',
        },
        {
          img: require('../Images/JACKETA.png'),
          name: 'JACKETA',
        },
        {
          img: require('../Images/TOP.png'),
          name: 'TOP',
        },
        {
          img: require('../Images/DREASS.png'),
          name: 'DREASS',
        }
      ],
      FactionList: [
        {},
        {},
        {},
        {},
        {},
        {},
      ],
      offerModal: true
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
          <View style={styles.container}>
            <ImageSlider
              loop
              autoPlayWithInterval={3000}
              images={images}
              onPress={({ index }) => alert(index)}
              customSlide={({ index, item, style, width }) => (
                <Image source={{ uri: item }} style={styles.customImage} />
              )}
            />
          </View>
          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Card style={styles.cardStyle}>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.CategoryList}
                renderItem={({ item }) =>
                  <View style={{ paddingHorizontal: 5 }}>
                    <Image
                      resizeMode='contain'
                      style={styles.circleImageStyle}
                      source={item.img}
                    />
                    <Text style={styles.imageTextStyle}>{item.name}</Text>
                  </View>
                }
                keyExtractor={(item) => item.id}
              />
            </Card>
            <FlatList
              style={{ marginBottom: 30 }}
              numColumns={2}
              data={this.state.FactionList}
              renderItem={({ item }) =>
                <CardComponent onPress={() => this.props.navigation.navigate("SellingScreen")} />
              }
              keyExtractor={(item) => item.id}
            />
          </View>
        </Content>
        <MenuFooter onPress={() => this.props.navigation.navigate("DrawerOpen")} />
        <Modal isVisible={this.state.offerModal} onBackdropPress={() => { this.setState({ offerModal: false }) }}>
          <ImageBackground style={styles.backgroundImageStyle}
            resizeMode='contain'
            source={require('../Images/Modal.png')}>
            <View style={styles.viewStyle}>
              <Text style={{ fontSize: width / 25, color: '#000', fontWeight: 'bold' }}>Sign up now & get</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: width / 15 }}>50%</Text>
                <Text style={{ fontWeight: 'bold' }}>off</Text>
              </View>
              <Item regular style={styles.itemStyle}>
                <Input placeholder='Your email address' placeholderTextColor="#C4C4C4" style={{ color: '#C4C4C4', fontSize: width / 35 }} />
              </Item>
              <Button style={styles.buttonStyle}>
                <Text uppercase={false}>Sign up</Text>
              </Button>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <AntDesignIcon name="closecircle" size={20} color="#000" style={{ alignSelf: 'flex-end', marginTop: -(width / 3), marginRight: 10 }} onPress={() => this.setState({ offerModal: false })} />
            </View>
          </ImageBackground>
        </Modal>
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
  container: {
    height: width / 2
  },
  imageStyle:
  {
    width: width / 7,
    height: height / 7
  },
  customImage: {
    width: width,
    height: width / 2,
  },
  cardStyle: {
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    padding: 10
  },
  circleImageStyle: {
    width: width / 5, height: width / 6,
    // borderRadius: width/3,borderWidth:2,
  },
  imageTextStyle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: width / 35,
    fontWeight: '700',
    color: '#000'
  },
  itemStyle: {
    marginTop: 5,
    height: height / 20,
    width: width / 2.5,
    backgroundColor: '#FFF',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#FFFFFF'
  },
  backgroundImageStyle: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'row',
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  buttonStyle: {
    width: width / 4,
    height: width / 12,
    backgroundColor: '#000',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 8,
    justifyContent: 'center'
  }
});