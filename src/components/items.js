import React, { Component } from 'react';
import {
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
  View
} from 'react-native';

import colors from '../assets/colors'
import AlbmusItems from './albums'
const Items = ({ results, navigation }) => (
  <FlatList
    onScrollBeginDrag={Keyboard.dismiss}
    showsVerticalScrollIndicator={false}
    data={results}
    styles={{ alignSelf: 'stretch', width: '100%', }}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.suggestionItem}
        onPress={() =>
          navigation.navigate('Albums', { item })

        }
      >
        <Image
          style={styles.image}
          source={{ uri: item.img }}
        />
        <View numberOfLines={1} style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.artistDetails}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.artistDetails}>
            {'Country:' + (item.country ? item.country : ' not listed')}
          </Text>
          <Text numberOfLines={1} style={styles.artistDetails}>
            {'ID: ' + item.info1}
          </Text>

        </View>

      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);
export default Items
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
    borderRadius: 10,
    borderColor:colors.pastalPink,
    borderWidth:1
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignSelf: 'center',
    borderColor: colors.pastalPink,
    borderWidth: 4,
    marginRight: 17,
    flex: 0
  },
  detailsContainer: {
    width: '100%',
    marginRight: 20
  },
  Suggestions: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    color: colors.Cultured
  },

  artistDetails: {
    color:  colors.copperpeny,
    paddingBottom: 2
  }
});
