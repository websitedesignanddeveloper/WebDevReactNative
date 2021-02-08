import React from "react";
import { AppRegistry, Image, TouchableOpacity, View, ScrollView, Dimensions, AsyncStorage } from "react-native";
import {
    Button,
    Text,
    Icon,
} from "native-base";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import IconNew from 'react-native-vector-icons/dist/FontAwesome';

const routes = [
    {
        name: "My Orders",
        route: "MyOrderScreen",
        //  icon: require("../img/choices.png"),
        bg: "#C5F442",
    },

    {
        name: "FAQ",
        route: "FAQ1Screen",
        // icon: require("../img/info.png"),
        bg: "#C5F442",
    },
    {
        name: "Logout",
        route: "Logout",
        // icon: require("../img/logout.png"),
        bg: "#C5F442",
    },

];

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: false, GoogleLoginFlag: false, FacebookLoginFlag: false, FacebookLoginID: 0,
            Name: "", imagePath: ''
        };

    }
    componentDidMount() {


    }
    draweropen() {

        this.setState({
            drawer: !this.state.drawer,
        });

    }
    ProfilePhoto() {
        <Image source={{ uri: this.state.imagePath }}
            style={{ width: 70, height: 70, borderRadius: 70 / 2 }} />
    }
    render() {
        return (
            <ScrollView>

                <View style={{ backgroundColor: '#FA1729' }}>
                    <Button transparent onPress={this.draweropen.bind(this)}>
                        <Icon name="menu" style={{ color: '#fff' }} />
                    </Button>
                </View>

                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        backgroundColor: '#FA1729',
                        borderRadius: 100, alignSelf: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 85,
                            height: 85,
                            backgroundColor: '#FA1729',
                            borderRadius: 85,
                        }}
                    >
                        {/* {this.ProfilePhoto()} */}

                    </TouchableOpacity>
                </TouchableOpacity>
                <Text style={{ fontSize: width / 22, color: '#fff', alignSelf: 'center', justifyContent: 'center', marginBottom: 10, }}>this.state.Name</Text>
                <List
                    style={{ backgroundColor: '#FA1729' }}
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                style={{ backgroundColor: '#FA1729' }}

                                onPress={() => {
                                    if (data.route == "Logout") {
                                        this.props.navigation.navigate("SignInScreen")
                                    }
                                    else {
                                        this.props.navigation.navigate(data.route)
                                    }
                                }}
                            >
                                <Left>
                                    {/* <Image  source={data.icon} resizeMode="contain" style={{ height: 25, width: 25 }} /> */}
                                    <Text style={{ fontSize: width / 22, color: '#fff', alignSelf: 'flex-start', paddingHorizontal: 10, fontFamily: 'SegoeUI-Regular' }} >
                                        {data.name.toUpperCase()}
                                    </Text>
                                </Left>

                            </ListItem>
                        );
                    }}
                />
                <Toast ref="toast" />
            </ScrollView>
        );
    }

}