import React, { Component } from 'react';
import {
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import colors from '../assets/colors'


const AlbumsItems = ({ results }) => (

  
     <FlatList
      onScrollBeginDrag={Keyboard.dismiss}
      showsVerticalScrollIndicator={false}
      data={results}
      styles={{ alignSelf: 'stretch', width:'100%',}}
      renderItem={({ item }) => (
        <View
          style={styles.suggestionItem}  
       
        >
          <Image
            style={styles.image}
            source={{ uri: item.img}}
          />
          <View numberOfLines={1} style={styles.detailsContainer}>
            <Text numberOfLines={1} style={styles.songTitle}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.artistDetails}>
              {'Artist: '+item.artist}
            </Text> 
            
          </View>
         
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    /> 
);
export default AlbumsItems
const styles = StyleSheet.create({
  suggestionItem: {
    flex: 1,
    flexDirection: 'row',
 //   width:'100%',
    flexWrap: 'nowrap',
    backgroundColor: colors.OrchidPink,
    elevation: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,     
    marginLeft: 10,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 10,
    borderRadius:10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignSelf: 'center',
    borderColor: colors.pastalPink,
    borderWidth:4,
    marginRight: 17,
    flex: 0
  },
  detailsContainer: {
    width: '100%',
    marginRight: 20
  },
  songTitle: {
    color: 'white',
    paddingBottom: 2
  },
  artistDetails: {
      color: 'white',
    paddingBottom: 2
  },
  
});
