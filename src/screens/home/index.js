import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TextInput,
    TouchableOpacity, FlatList, Image, Keyboard, Surface
} from 'react-native';
import colors from '../../assets/colors'
import SearchItems from '../../components/searchItem'
import ArtistsProvider from '../../providers/Artists'
import { BottomSheet } from 'react-native-btr';
class TracksScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { results: [], text: '', showAlbum: false, album: {} };

    }
    async UNSAFE_componentWillReceiveProps(nextProps) {
        try {

console.log(nextProps.navigation.state.params.item.id_album,nextProps.navigation.state.params.item.id_artist)
//console.log()
            if (nextProps.navigation.state.params.item) {
                var artistID = nextProps.navigation.state.params.item.id_artist
                var albumID=nextProps.navigation.state.params.item.id_album
                this.setState({ artistID: artistID, showSearch: false })
                this.getTracks(artistID,albumID)

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
        this.setState({ results: '' });
        // Keyboard.dismiss();
    };

    getTracks = async (id_artist,id_album) => {
        try {
         
           
                var response = await new ArtistsProvider().getAlbumTracks(id_artist,id_album)
                var tracks = response.tracks
              for (var track of tracks) {
                  if (track.haslyrics) {
                    var res = await new ArtistsProvider().getTrackLyrics(id_artist,id_album,track.id_track)
                    track.lyrics=res.lyrics
                //    console.log('res',res.lyrics)
                  }
                 
                  track.label=response.label
                  track.cover=response.cover
                  track.artist=response.artist
                  track.album=response.album
                  track.id_artist=response.id_artist
                  track.id_album=response.id_album
              }
              
                this.setState({ results: tracks })

            

        } catch (error) {
            alert(error)
        }

    };

    getInfo = async (query) => {
        try {
            if ((this.state.text).toString().length <= 0) {
                alert('Please enter a text')
            }
            else {
                var response = await new ArtistsProvider().search(query)
                var tracks = response
                if (tracks.length == 0) {
                    alert('No Tracks, Please enter a valid test')
                }
                for (var track of tracks) {
                    if (track.haslyrics) {
                      var res = await new ArtistsProvider().getTrackLyrics(track.id_artist,track.id_album,track.id_track)
                      track.lyrics=res.lyrics
                  //    console.log('res',res.lyrics)
                    }
                   
                    // track.label=response.label
                    // track.cover=response.cover
                    // track.artist=response.artist
                    // track.album=response.album
                    // track.id_artist=response.id_artist
                    // track.id_album=response.id_album
                }
              
                this.setState({ results: tracks })

            }

        } catch (error) {
            alert(error)
        }

    };

    render() {
        const { navigation } = this.props;
      

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Enter Artisit,Song ..."
                        onChangeText={changedText => this.setState({ text: changedText })
                        }

                    // value={text}
                    />
                    <TouchableOpacity style={styles.searchbtn} onPress={() => this.getInfo((this.state.text).toString())} >
                        <Text >{'Search'}</Text>
                    </TouchableOpacity>


                </View>

                <SearchItems
                    style={styles.Suggestions}
                    results={this.state.results}
                    navigation={navigation}

                />

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

export default TracksScreen;