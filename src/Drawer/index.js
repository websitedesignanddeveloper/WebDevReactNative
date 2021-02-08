import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Dimensions,StatusBar } from 'react-native'
import HomeScreen from './HomeScreen';

import SideBar from './SideBar';

const HomeScreenRouter = DrawerNavigator(
    {
      HomeScreen: { screen: HomeScreen },
    },
  
    {
      drawerWidth: (Dimensions.get('window').width/1.2),
      drawerBackgroundColor:"#FA1729",
      contentComponent: props => <SideBar {...props} />,
     
    },
    
  );
  export default HomeScreenRouter;