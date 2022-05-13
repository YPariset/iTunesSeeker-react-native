import { SearchBar, Card } from 'react-native-elements';
import { FlatList, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { CardInfo } from './Card';

const createRequest = (search) => {
    return ('https://itunes.apple.com/search?term=' + search + '&attribute=mixTerm&country=fr&sort=popular&limit=20');
}

const Search = ({ navigation }) => {
    const [search, onChangeSearch] = useState('');
    const [songsList, setSongsList] = useState([]);

    const findRequest = async () => {
        
        let req = await fetch(createRequest(search));
        let songInfo = await req.json();
        setSongsList(songInfo);
    }

    useEffect(() => {
        if (search) {
            findRequest();
        } else {
            setSongsList([]);
        }
    }, [search]);

    return (
        <View style={styles.container}>
            <View>
                <SearchBar
                    placeholder='Artists, titles or podcasts...'
                    round='true'
                    value={search}
                    onChangeText={onChangeSearch}
                    containerStyle={{ backgroundColor: 'white', width: '100%' }}
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    lightTheme='true'
                />
                <FlatList
                    data={songsList.results}
                    extraData={songsList.results}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Details", item)}>
                            <Card>
                                <CardInfo
                                    image={item.artworkUrl100}
                                    title={item.trackName}
                                    artists={item.artistName}
                                    album={item.collectionName}
                                    genre={item.primaryGenreName}
                                />
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <StatusBar syle='auto' />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Search;