import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,BackHandler,Alert
} from 'react-native';
import { Container, Card, List, ListItem, Thumbnail, Text, Button, Header, Content, Left, Body, Right } from "native-base";
import IconNew1 from 'react-native-vector-icons/dist/Fontisto';
import ImageSlider from 'react-native-image-slider';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Footer from "../Components/Footer";
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
      ]

    };
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentWillUnmount() {
   
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
            {/* <IconNew name="chevron-left" size={30} color="#707070" onPress={()=>this.props.navigation.navigate('DrawerOpen')} /> */}
          </Left>
          <Body style={styles.headerTitle}>
            <Image
              resizeMode='contain'
              style={styles.headerImageStyle}
              source={require('../Images/Goya.png')}
            />
          </Body>
          <Right style={styles.right}>
            <IconNew1 name="search" size={25} color="#707070" />
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
              style={{ alignSelf: 'center', marginBottom: 30 }}
              numColumns={2}
              data={this.state.FactionList}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SellingScreen')}>
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
                </TouchableOpacity>
              }
              keyExtractor={(item) => item.id}
            />
          </View>

        </Content>
        <Footer/>
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
    width: width / 5,
    height: width / 5
  },
  headerTitle: {

    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2
  },
  imageStyle:
  {
    width: width / 7,
    height: height / 7
  },
  right: {
    flex: 1
  },
  container: {
    height: width / 2
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
  circleImageStyle: {
    width: width / 5, height: width / 6,
    // borderRadius: width/3,borderWidth:2,

  },
  imageTextStyle: {
    textAlign: 'center',
    fontSize: width / 28,
    fontWeight: '700',
    color: '#000'

  },
  viewStyle: {
    paddingVertical: 20
  },
  imageStyle: {
    width: width / 2.5,
    height: width / 2.5,
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
});
