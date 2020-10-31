import React from 'react';
import { View, Text, StyleSheet,StatusBar,TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';
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
const LandingScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.title}>Landing App</Text>
      
        {/* <Animatable.Image
          animation={zoomIn}
          source={require('../../assets/imgs/splash_screen.png')}
          style={styles.logo}
        onAnimationEnd={() =>navigation.navigate('Home')}
        
        >
            
            </Animatable.Image> */}
          
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
      },
      logo: {
        height: '100%',
        width: '100%',
        marginBottom: 40,
        marginTop: 20,
      },
  });
   
  export default LandingScreen;