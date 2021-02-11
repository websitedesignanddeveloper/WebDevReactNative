import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler, AppState,  TouchableOpacity, } from "react-native";
import { Container,View, Text, Content, } from "native-base";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import FullButton from "../Components/FullButton";
import ViewCardButton from "../Components/ViewCardButton";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class AddToCardScreen extends React.Component {
    static appIsActive = true;
    constructor(props) {
        super(props)
        this.state = {
            Quantity: 0,
            Total: 0
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    handleBackButton = () => {
        this.props.navigation.navigate("SingleProduct")
        return true;
    }
    IncrementQuantity() {
        this.setState({
            Quantity: this.state.Quantity + 1,
            Total: 39 * (this.state.Quantity + 1)
        })
    }
    DecrementQuantity() {
        if (this.state.Quantity > 0) {
            this.setState({
                Quantity: this.state.Quantity - 1,
                Total: 39 * (this.state.Quantity - 1)
            })
        }
    }
    GoToCheckoutScreen() {
        this.props.navigation.navigate("CheckoutSceen")
    }
    render() {
        return (
            <Container>
                <Content style={styles.containerStyle}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 10 }}>
                        <View>
                            <Ionicons name="md-cart-outline" size={30} color="#707070" />
                            <View style={styles.circleStyle}>
                                <Text style={styles.circleTextStyle}>1</Text>
                            </View>
                        </View>
                        <Ionicons name="close-circle-outline" size={25} color="#958D8D" />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <View style={{ flex: 1 }}>
                            <Image source={require("../Images/Profile.jpg")}
                                style={styles.imageStyle} />
                        </View>
                        <View style={styles.viewStyle}>
                            <View style={styles.textSectionStyle}>
                                <Text style={styles.productNameStyle}>Abstract Print Cotton Blouse</Text>
                                <Ionicons name="close" size={16} color="#958D8D" />
                            </View>
                            <View style={styles.quantitySectionStyle}>
                                <View style={{ flexDirection: 'row', flex: 1, }}>
                                    <TouchableOpacity onPress={this.DecrementQuantity.bind(this)}>
                                        <Ionicons name="remove" size={15} color="#000000" />
                                    </TouchableOpacity>
                                    <Text style={[styles.textStyle, { paddingHorizontal: 20 }]}>{this.state.Quantity}</Text>
                                    <TouchableOpacity onPress={this.IncrementQuantity.bind(this)}>
                                        <MaterialCommunityIcons name="plus" size={16} color="#000000" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textStyle}>$39.00</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <View style={{ padding: 10, justifyContent: 'space-between', backgroundColor: '#FCEFEF' }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                        <Text style={styles.subTotalTextStyle}>Subtotal:</Text>
                        <Text style={styles.subTotalTextStyle}>${this.state.Total}</Text>
                    </View>
                    <ViewCardButton>View cart</ViewCardButton>
                    <FullButton onPress={this.GoToCheckoutScreen.bind(this)}>Checkout</FullButton>
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
        backgroundColor: '#FCEFEF'
    },
    circleStyle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: '#8439FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width / 18,
        marginTop: -(width / 10)
    },
    circleTextStyle: {
        color: "#FFFFFF",
        fontSize: width / 30
    },
    imageStyle: {
        width: width / 5,
        height: width / 4.5
    },
    viewStyle: {
        flex: 3,
        height: height / 8
    },
    textSectionStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    productNameStyle: {
        fontSize: width / 30,
        color: '#000000',
        flex: 1
    },
    quantitySectionStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginTop: 10
    },
    textStyle: {
        fontSize: width / 25,
        color: '#000000'
    },
    subTotalTextStyle: {
        fontSize: width / 20,
        color: '#000000',
        fontWeight: 'bold'
    }
});