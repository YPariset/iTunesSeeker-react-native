import { StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import { View } from "react-native";

export const CardInfo = (props) => {
    return (
        <View style={styles.flexRow}>
            <View style={styles.marginRight}>
                <Image source={{ uri: props.image }} style={styles.imageSize}></Image>
            </View>
            <View>
                <Text h4 style={styles.title}>{props.title}</Text>
                <Text style={styles.artist}>Artiste(s) • {props.artists}</Text>
                <Text style={styles.italicFont}>Album • {props.album}</Text>
                <Text style={styles.italicFont}>Genre • {props.genre}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        display: "flex",
        flexDirection: "row"
    },
    marginRight: {
        marginRight: 10,
    },
    title: {
        color: '#4F518C'
    },
    artist: {
        fontSize: 16
    },
    italicFont: {
        fontStyle: 'italic'
    },
    imageSize: {
        width:  50,
        height: 50,
        resizeMode: 'cover',
    },
});