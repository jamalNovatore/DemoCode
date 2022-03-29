//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// create a component
let height = Dimensions.get('window').height
let width = Dimensions.get('window').width
const DetailScreen = (props) => {

    return (
        <View style={styles.container}>
            <Image
                resizeMode='cover'
                source={{ uri: props.route.params.item.imgUrl }}
                style={styles.heroImage}
            />
            <View style={{ padding: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.headingText}>Hero Name: </Text>
                    <Text style={styles.text}>{props.route.params.item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.headingText}>Comic Name: </Text>
                    <Text style={styles.text}>{props.route.params.item.comic}</Text>
                </View>
                <Text style={styles.headingText}>Description: </Text>
                <Text style={styles.text}>{props.route.params.item.description}</Text>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heroImage:{ width: "100%", height: "50%" },
    headingText: { 
        fontSize: width * 0.05, 
        fontWeight: 'bold' ,
        color:'black'
    },
    text: { 
        fontSize: width * 0.05,
        color:'black' 
    }
});

//make this component available to the app
export default DetailScreen;
