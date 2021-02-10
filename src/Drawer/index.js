import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Dimensions,StatusBar } from 'react-native'
import HomeScreen from './HomeScreen';
import { SellingScreen1 } from "./SellingScreen";

import SideBar from './SideBar';

const HomeScreenRouter = DrawerNavigator(
    {
      HomeScreen: { screen: HomeScreen },
     //SellingScreen:{screen :SellingScreen1}
      
    },
  
    {
      drawerWidth: (Dimensions.get('window').width/1.1),
      drawerBackgroundColor:"#FA1729",
      contentComponent: props => <SideBar {...props} />,
     
    },
    
  );
  export default HomeScreenRouter;