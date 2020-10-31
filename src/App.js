
import React, { Component } from 'react';
import {
 
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity
  

} from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import Stack from './nav/router'




class App extends Component {
  constructor(props) {
    super(props);
  }
  state={}



  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />   
       

        <Stack />
       
      </View>
    );
  }
}


export default App;




const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
   
  },
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    color: '#000',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginRight: 5,
    fontSize: 18,
},
inputContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
},
searchBtn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,}
});


