import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TextInput,
    TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, Surface
} from 'react-native';
import Items from '../../components/items'
import colors from '../../assets/colors'
import ArtistsProvider from '../../providers/Artists'
class ArtistsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [], albums:[]};

    }
    componentDidMount() {
        try {
            this.getInfo();
        } catch (error) {
            alert(ex)
        }

    }
    getInfo = async () => {
        try {
            var response = await new ArtistsProvider().getAll(1)
           
            var artists = response

            for (var artist of artists) {
             
                artist.name = artist.artist
                artist.img = artist.cover
                artist.info1 = artist.id_artist
                

            }

           

            this.setState({ results: artists })

        } catch (error) {
            alert(error)
        }

    };
  

    render() {
        const { navigation } = this.props;
       
        return (
            <View style={styles.container}>
                <Items
                    style={styles.Suggestions}
                    results={this.state.results}                 
                    navigation={navigation}
                  
                />



            </View>
        );
    }
}
;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: colors.PalePurplePantone,
        width: '100%',
        paddingTop:10
    },
    Suggestions: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        color: colors.Cultured
    },

});

export default ArtistsScreen;