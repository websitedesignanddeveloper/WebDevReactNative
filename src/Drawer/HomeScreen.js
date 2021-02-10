import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { Container, Card, Text, Header, Content, Left, Body, Right } from "native-base";
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import ImageSlider from 'react-native-image-slider';
import CardComponent from "../Components/CardComponent";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MenuFooter from "../Components/MenuFooter";
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
            <FontistoIcon name="search" size={20} color="#707070" onPress={()=>this.props.navigation.navigate("SearchScreen")}/>
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
                                <CardComponent  onPress={() => this.props.navigation.navigate("SellingScreen")}/>
              }
              keyExtractor={(item) => item.id}
            />
          </View>
        </Content>
        <MenuFooter onPress={() => this.props.navigation.navigate("DrawerOpen")} />
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

});