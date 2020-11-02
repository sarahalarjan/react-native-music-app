import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TextInput,
    TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, Surface
} from 'react-native';
import colors from '../../assets/colors'
import AlbmusItems from '../../components/albums'
import ArtistsProvider from '../../providers/Artists'
import { BottomSheet } from 'react-native-btr';
class AlbumsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { results: [], text: '', showSearch: true, album: {}, artistID: null };

    }
    async UNSAFE_componentWillReceiveProps(nextProps) {
        try {


            if (nextProps.navigation.state.params.item) {
                var artistID = nextProps.navigation.state.params.item.id_artist
                this.setState({ artistID: artistID, showSearch: false })
                this.getInfo(artistID)

            }


        } catch (error) {
            alert(error)
        }

    }


    componentDidUpdate(prevProps, prevState) {
        const { text } = this.state;
        if (text !== prevState.text) {
            if (text.length <= 1) {
                this.submitAndClear();
            }
        }
    }
    submitAndClear = () => {
        this.setState({ results: '' , artistID:null });
        // Keyboard.dismiss();
    };


    getInfo = async (id) => {
        try {
         
            var response = await new ArtistsProvider().getArtistAlbums(id)
            var albums = response.albums
            if (albums.length == 0) {
                alert('No Albums')
            }
            for (var album of albums) {

                album.name = album.album
                album.img = album.cover
                album.id_artist = id
                album.artist = response.artist
                album.length=response.length

            }


            this.setState({ results: albums, artistName: response.artist })





        } catch (error) {
            alert(error)
        }

    };


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
               
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Enter Artist ID"
                            onChangeText={changedText => this.setState({ text: changedText })
                            }

                        // value={text}
                        />
                        <TouchableOpacity style={styles.searchbtn} onPress={() => this.getInfo(this.state.text)} >
                            <Text >Search</Text>
                        </TouchableOpacity>


                    </View>
                {this.state.artistName ? (<Text style={styles.artistName}>{this.state.artistName + "'s Albums"}</Text>) : null}


                {this.state.results.length > 0 ? (
                <AlbmusItems

                    style={styles.Suggestions}
                    results={this.state.results}
                    navigation={navigation}

                />) : null}


            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PalePurplePantone,
        width: '100%',
        paddingTop: 10
    },
    Suggestions: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        color: colors.Cultured
    },
    artistName: {
        color: colors.OldRose,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        padding:2
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    input: {
        width: '80%',
        height: 45,
        padding: 10,
        color: '#000',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginRight: 5,
        fontSize: 18,
    },
    searchbtn: {
        alignItems: 'center',
        height: 45,
        padding: 10,
        color: '#000',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginRight: 5,
        fontSize: 18,
        backgroundColor: colors.ceamoPink
    },
    bottomSheet: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: colors.OrchidPink,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,

    },
    addItem: {
        borderBottomWidth: 1,
        borderBottomColor: colors.PalePurplePantone,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        //  alignItems: 'center'
    },
    addItemText: {
        color: colors.OldRose,
        fontSize: 16,
        fontWeight: '500',
        marginStart: 14,
        width: '100%'

    },


});

export default AlbumsScreen;