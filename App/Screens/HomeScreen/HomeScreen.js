//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../Redux/Actions/Action';

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width
const HomeScreen = ({ navigation }) => {
    const heros = useSelector(state => state.herosReducer.heros);
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const dispatch = useDispatch();
    const fetchHeros = () => dispatch(getHeroes());

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={styles.sepertator}
          />
        );
      };

    const renderHeader = () => (
        <View
            style={styles.headerView}>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => { searchFilterFunction(text) }}
                status='info'
                placeholder='Search'
                style={styles.textInput}
                textStyle={{ color: '#000',  }}
                value={search}
            />
        </View>
    )

    const renderListEmpty = () => (
        <View
            style={styles.listEmpty}>
            <ActivityIndicator />
        </View>
    )

    useEffect(() => {
        fetchHeros();
    }, []);

    useEffect(() => {
        setFilteredDataSource(heros)
        setMasterDataSource(heros)

    }, [heros]);


    return (
        <View style={styles.container}>
            <FlatList
                data={filteredDataSource}
                ListHeaderComponent={renderHeader}
                ListEmptyComponent={renderListEmpty}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => { navigation.navigate("Detail", { item }) }}
                        style={styles.tileContainer}>
                        <View>
                            <Image
                                resizeMode='cover'
                                source={{ uri: item.imgUrl }}
                                style={styles.heroImage}
                            />
                        </View>
                        <View style={styles.detailConatianer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.headingText}>Hero Name: </Text>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.headingText}>Comic: </Text>
                                <Text style={styles.text}>{item.comic}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    tileContainer: {
        height: height * 0.15,
        width: width * 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5
    },
    heroImage: {
        height: height * 0.13,
        width: width * 0.2,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 2
    },
    detailConatianer: {
        height: '100%',
        width: '80%',
        backgroundColor: 'yellow',
        paddingHorizontal: 5,
        justifyContent: 'center',
        borderRadius: 10
    },
    headingText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color:'black'
    },
    text: {
        fontSize: width * 0.05,
        color:'black'
    },
    headerView: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#fff',
        width: width * 0.9,
        height:height*0.06
    },
    listEmpty:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    sepertator:{
        height: 0.5,
        width: '90%',
        alignSelf:'center',
        backgroundColor: '#C8C8C8',
      },
});

//make this component available to the app
export default HomeScreen;
