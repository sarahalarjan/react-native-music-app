import React from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity, } from 'react-native';
import { ScrollView } from 'react-native';
import colors from '../../assets/colors'
const zoomIn = {
    0: {
      scale: 0,
    },
    0.5: {
      scale: 0.5,
    },
    1: {
      scale: 1,
    },
  };
const LandingScreen = ({ navigation ,item }) => {

    return (
      
       
      
        
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.title}>{navigation.state.params.item.lyrics}</Text>
        </ScrollView>
       
          
       
      
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PalePurplePantone,
        
      },
      title: {
        fontSize: 22,
        color: colors.copperpeny,
        alignSelf:'center',       
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign:'center'
      },
      logo: {
        height: '100%',
        width: '100%',
        marginBottom: 40,
        marginTop: 20,
      },
  });
   
  export default LandingScreen;