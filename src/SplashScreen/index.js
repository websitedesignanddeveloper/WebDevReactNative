import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import AppIntroScreen from "./AppIntroScreen";
import SignInScreen from "../SignIn/SignInScreen";
// import HomeScreen from "../Drawer/HomeScreen";
 import SellingScreen from "../Drawer/SellingScreen";
 import SingleProduct from "../Drawer/SingleProduct";
import HomeScreen from '../Drawer/index';
import SearchScreen from "../Drawer/SearchScreen";
export default (DrawNav = StackNavigator({
    SplashScreen: { screen: SplashScreen,navigationOptions:{header:null} },
    AppIntroScreen:{screen :AppIntroScreen, navigationOptions:{header:null}},
    SignInScreen:{screen:SignInScreen,navigationOptions:{header:null}},
    HomeScreen:{screen:HomeScreen,navigationOptions:{header:null}},
    SellingScreen:{screen:SellingScreen,navigationOptions:{header:null}},
    SingleProduct:{screen:SingleProduct,navigationOptions:{header:null}},
    SearchScreen:{screen:SearchScreen,navigationOptions:{header:null}}
}))