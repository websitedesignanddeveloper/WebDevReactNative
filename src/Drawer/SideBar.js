import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, ScrollView, Dimensions, AsyncStorage } from "react-native";
import { Button, Text, Icon, List, } from "native-base";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const routes = [
    {
        name: "Home",
        route: "HomeScreen",
        icon: 'home',
    },

    {
        name: "Payment",
        route: "PaymentScreen",
        icon: 'card-outline',
    },
    {
        name: "Settings",
        route: "SettingScreen",
        icon: 'settings-outline',
    },
    {
        name: "Help & Feedback",
        route: "Logout",
        icon: 'settings-outline',
    },

];
const subRoutes = [
    {
        name: "Privacy Policy",
        route: "PrivacyScreen",
        icon: 'home',
    },

    {
        name: "Terms Of Use",
        route: "TermsScreen",
        icon: 'card-outline',
    },
    {
        name: "About",
        route: "AboutScreen",
        icon: 'settings-outline',
    },
];

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: false,
            Name: "", imagePath: ''
        };

    }


    render() {
        return (
            <ScrollView style={styles.containerStyle}>

                <View style={styles.sectionStyle}>
                    <View style={styles.imageSectionStyle}>
                        <Image source={require("../Images/Profile.jpg")}
                            style={styles.profileImageStyle} />
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerClose")}>
                            <Icon name="close-circle-outline" style={styles.iconStyle} />
                        </Button>
                    </View>
                    <View style={styles.textSectionStyle}>
                        <Text style={styles.nameStyle}>Angel Smith</Text>
                        <Text style={styles.emailStyle}>admin@email.com</Text>
                    </View>
                </View>
                <List
                    dataArray={routes}
                    style={styles.routeListStyle}
                    renderRow={data => {
                        return (
                            <TouchableOpacity
                                style={{ flexDirection: 'row', padding: 10 }}
                                onPress={() => {
                                    if (data.route == "Logout") {
                                        this.props.navigation.navigate("SignInScreen")
                                    }
                                    else {
                                        this.props.navigation.navigate(data.route)
                                    }
                                }}>
                                <Ionicons name={data.icon} size={20} color="#707070" />
                                <Text style={styles.textStyle}>{data.name}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
                <List
                    dataArray={subRoutes}
                    style={styles.routeSubListStyle}
                    renderRow={data => {
                        return (
                            <TouchableOpacity
                                style={{ flexDirection: 'row', padding: 10 }}
                                onPress={() => {
                                    if (data.route == "Logout") {
                                        this.props.navigation.navigate("SignInScreen")
                                    }
                                    else {
                                        this.props.navigation.navigate(data.route)
                                    }
                                }}>

                                <Text style={styles.textStyle} >
                                    {data.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff'
    },
    sectionStyle: {
        backgroundColor: '#8439FF',
        paddingHorizontal: 20
    },
    imageSectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    iconStyle: {
        color: '#fff',
        marginTop: -20,
        marginRight: -5
    },
    profileImageStyle: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginTop: 10
    },
    textSectionStyle: {
        height: height / 6,
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    nameStyle: {
        fontSize: width / 25,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 5
    },
    emailStyle: {
        fontSize: width / 30,
        color: '#fff',
    },
    routeListStyle: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    routeSubListStyle: {
        borderTopColor: '#E8E8E8',
        borderTopWidth: 1
    },
    textStyle: {
        fontSize: width / 25,
        color: '#000000',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        fontWeight: '700'
    }
})