import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../assets/colors'

import HomeScreen from "../screens/home";
import LandingScreen from "../screens/landing"
import ArtistsScreen from "../screens/artists";
import AlbumsScreen from "../screens/albums";

import {

  StyleSheet,

  View,
  Text,

} from 'react-native';



const Tabs = createMaterialTopTabNavigator(
  {

    Artists: {
      screen: ArtistsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ color: tintColor }}>Artists</Text>
          </View>
        ),

      })
    },
    Albums: {
      screen: AlbumsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ color: tintColor }}>Albums</Text>
          </View>
        ),

      })
    },
    Tracks: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ color: tintColor }}>Tracks</Text>
          </View>
        ),

      })
    },


  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',

      style: {
        height: 50,
        backgroundColor: colors.ceamoPink,
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: colors.ceamoPink,
        elevation: 10,
      },
    },
    initialRouteName: "Artists",
    lazy: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
  }

);
const Stack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,

      navigationOptions: {
        title: 'lyrics App',

        headerStyle: {
          backgroundColor: colors.ceamoPink,
          height: 40,


        },
        headerTitleStyle: {
          //  fontWeight: 'bold',
          color: 'white'
        },
      },

    },
    lyrics:{
      screen:LandingScreen,
      navigationOptions: ({ navigation ,item }) => ({
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.iconCOntainer}>
            <Text style={{ color: 'white', backgroundColor: colors.ceamoPink, }}>Lyrics</Text>
          </View>
        ),

      }),
      headerStyle: {
        backgroundColor: colors.ceamoPink,
        height: 40,


      },

    }

  }
);
const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.ceamoPink,
  },
});

export default createAppContainer(Stack);  
