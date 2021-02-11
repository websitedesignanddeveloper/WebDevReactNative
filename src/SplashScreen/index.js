import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import StartScreen from "./StartScreen";
import SignInScreen from "../SignIn/SignInScreen";
import WishListScreen from "../Drawer/WishListScreen";
import SellingScreen from "../Drawer/SellingScreen";
import SingleProduct from "../Drawer/SingleProduct";
import HomeScreen from '../Drawer/index';
import SearchScreen from "../Drawer/SearchScreen";
import AddToCardScreen from "../Drawer/AddToCardScreen";
import CheckoutSceen from "../Drawer/CheckoutSceen";
export default (DrawNav = StackNavigator({
    SplashScreen: { screen: SplashScreen,navigationOptions:{header:null} },
    StartScreen:{screen :StartScreen, navigationOptions:{header:null}},
    SignInScreen:{screen:SignInScreen,navigationOptions:{header:null}},
    HomeScreen:{screen:HomeScreen,navigationOptions:{header:null}},
    SellingScreen:{screen:SellingScreen,navigationOptions:{header:null}},
    SingleProduct:{screen:SingleProduct,navigationOptions:{header:null}},
    SearchScreen:{screen:SearchScreen,navigationOptions:{header:null}},
    AddToCardScreen:{screen:AddToCardScreen,navigationOptions:{header:null}},
    CheckoutSceen:{screen:CheckoutSceen,navigationOptions:{header:null}},
    WishListScreen:{screen:WishListScreen,navigationOptions:{header:null}},
}))