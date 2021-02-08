import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import AppIntroScreen from "./AppIntroScreen";
import SignInScreen from "../SignIn/SignInScreen";
 import HomeScreen from "../Drawer/HomeScreen";
 import SellingScreen from "../Drawer/SellingScreen";
//import HomeScreen from '../Drawer/index';
export default (DrawNav = StackNavigator({
    SplashScreen: { screen: SplashScreen,navigationOptions:{header:null} },
    AppIntroScreen:{screen :AppIntroScreen, navigationOptions:{header:null}},
    SignInScreen:{screen:SignInScreen,navigationOptions:{header:null}},
    HomeScreen:{screen:HomeScreen,navigationOptions:{header:null}},
    SellingScreen:{screen:SellingScreen,navigationOptions:{header:null}}
}))