import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Image, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import { Container,Text, Header, Content, Left, Body, Right } from "native-base";
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import ProductListItem from "../Components/ProductListItem";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MenuFooter from "../Components/MenuFooter";
import RadioButtonRN from 'radio-buttons-react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default class CheckoutSceen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FactionList: [
        {},
        {},
      ],
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton = () => {
    this.props.navigation.navigate("AddToCardScreen")
    return true;
  }
  GoToPaymentGetway() {
    var options = {
      description: 'Credits towards consultation',
      currency: 'INR',
      key: '', // Your api key
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      console.log(`Error: ${error} | ${error.description}`);
    });
  }
  render() {
    const ShippingData = [
      {
        label: 'Free shipping'
      },
      {
        label: 'Flat Rate:$10.00'
      }
    ];
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Left style={styles.left}>
            <EntypoIcon name="chevron-left" size={30} color="#707070" onPress={() => this.props.navigation.navigate("AddToCardScreen")} />
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
          <View style={{ padding: 10, marginTop: 10 }}>
            <FlatList
              data={this.state.FactionList}
              renderItem={({ item }) =>
                <ProductListItem />
              }
              keyExtractor={(item) => item.id}
            />
            <View style={styles.subViewStyle}>
              <Text style={[styles.subTotalTextStyle, { flex: 2 }]}>SUBTOTAL</Text>
              <Text style={[styles.subTotalTextStyle, { flex: 1, textAlign: 'center', marginLeft: -14 }]}>$ 78</Text>
            </View>
            <View style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EEE4E4' }}>
              <Text style={[styles.subTotalTextStyle, { paddingVertical: 15 }]}>SHIPPING</Text>
              <RadioButtonRN
                box={false}
                color='#6F6666'
                activeColor='#6F66666'
                circleSize={10}
                textStyle={{ marginTop: -5, fontWeight: 'bold', fontSize: width / 25 }}
                style={{ marginBottom: 10 }}
                data={ShippingData}
                selectedBtn={(e) => console.log(e)}
              />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 15, }}>
              <Text style={[styles.subTotalTextStyle, { flex: 2 }]}> TOTAL</Text>
              <Text style={[styles.subTotalTextStyle, { flex: 1, textAlign: 'center', marginLeft: -14 }]}>   $ 78</Text>
            </View>
          </View>
          <View style={{ borderWidth: 1, borderColor: '#EEE4E4', margin: 10, padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.outerCircleStyle}>
                <View style={styles.innerCircleStyle}></View>
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: width / 25, paddingLeft: 10, marginTop: -3 }}>Cash on delivery</Text>
            </View>
            <Text style={{ color: '#ADA6A6', fontSize: width / 25, marginLeft: 25, paddingVertical: 10, fontWeight: '700' }}>Pay with cash upon delivery.</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.outerCircleStyle}>
                <View style={styles.innerCircleStyle}></View>
              </View>
              <TouchableOpacity onPress={this.GoToPaymentGetway.bind(this)}>
                <Image
                  resizeMode='contain'
                  style={styles.payPalImageStyle}
                  source={require('../Images/PayPal.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
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
  subTotalTextStyle: {
    fontSize: width / 25,
    color: '#484848',
  },
  subViewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomColor: '#EEE4E4',
    borderBottomWidth: 1,
    borderTopColor: '#EEE4E4'
  },
  outerCircleStyle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircleStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#151515'
  },
  payPalImageStyle: {
    width: width / 3,
  }
});