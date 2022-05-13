import { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { Card, Text, Button } from 'react-native-elements';
import { View, StyleSheet, StatusBar } from "react-native"
import { AirbnbRating } from 'react-native-ratings';
import { useDispatch } from "react-redux";
import { add } from "./slices/GenreSlice";

const Song = ({ navigation }) => {
    const dispatch = useDispatch();
    const route = useRoute();
    const [song] = useState(route.params);
    const [rate, setRate] = useState('');

    const addSong = () => {
        song.rate = rate;
        dispatch(add(song));        
        navigation.navigate("Library");
    }

    return (
        <View>
            <Card>
                <Card.Title ><Text h4 style={styles.titleTitle}>{song.trackName}</Text></Card.Title>
                <Card.Divider />
                <View style={styles.center}>
                <Card.Image source={{ uri: song.artworkUrl100 }} style={styles.imageSize} />
                </View>
                <View style={styles.p2}>
                    <Button title="Ajouter à la liste"
                        buttonStyle={styles.buttonStyle}
                        onPress={addSong} 
                    />
                </View>
                <Card.Divider />
                <Text style={styles.bold}>Artistes :</Text>
                <Text style={styles.details}>{song.artistName}</Text>
                <Text style={styles.bold}>Genre :</Text>
                <Text style={styles.details}>{song.primaryGenreName}</Text>
                <Text style={styles.bold}>Album :</Text>
                <Text style={styles.details}>{song.collectionName}</Text>
                <AirbnbRating
                    style={styles.p3}
                    type='custom'
                    imageSize={25}
                    ratingCount={5}
                    defaultRating={0}
                    size={20}
                    onFinishRating={setRate}
                    ratingColor='#FFE656'
                />                
            </Card>
            <StatusBar syle='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    p3: {
        padding: 3
    },
    p2: {
        padding: 2,
    },
    imageSize: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    buttonStyle: {
        backgroundColor: '#91A6FF',
        borderRadius: 5,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    details: {
        padding: 3,
        color: 'grey'
    }
});

export default Song;