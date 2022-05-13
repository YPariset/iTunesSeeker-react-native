import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux"
import { Card, Rating } from 'react-native-elements';
import { filteredSongsSelector } from "./slices/GenreSlice"
import { FilterButton } from "./FilterButton";

import { CardInfo } from "./Card";

const Songs = () => {
    const songs = useSelector(filteredSongsSelector);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FilterButton
                    title={"All"}
                    type={"all"}
                />
                <FilterButton
                    title={"Hip-hop/Rap"}
                    type={"Hip-hop/Rap"}
                />
                <FilterButton
                    title={"Rock"}
                    type={"Rock"}
                />
                <FilterButton
                    title={"Dance"}
                    type={"Dance"}
                />
            </View>
            <FlatList
                data={songs}
                extraData={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card>
                        <CardInfo
                            image={item.song.artworkUrl100}
                            title={item.song.trackName}
                            artists={item.song.artistName}
                            album={item.song.collectionName}
                            genre={item.song.primaryGenreName}
                        />
                        <Rating
                            type='custom'
                            readonly
                            startingValue={item.song.rate}
                            imageSize={25}
                            ratingCount={5}
                            size={5}
                            ratingColor='#FFE656'
                        />
                    </Card>
                )} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    title: {
        color: '#91A6FF'
    },
    artist: {
        fontSize: 16
    },
    fontItalic: {
        fontStyle: 'italic'
    }
});

export default Songs;