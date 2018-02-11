import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import DiscoverySlideShow from '../components/discoveryslideshow'
import { NineGridBlade, TwoColumnGridBlade } from '../components/browser.blade'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showLoadingIcon: false
        }

        this.onTopDealNavigate = this.onTopDealNavigate.bind(this)
    }

    static navigationOptions = {
        title: 'Home'
    }

    onTopDealNavigate = () => {
        this.props.navigation.navigate("Category")
    }

    render() {

        return (
            <View style={styles.container}>

                <View>
                    <SearchBar placeholder="I'm looking for..."
                        platform="ios"
                        autoCorrect={false}
                        icon={{ type: 'ionicons', name: 'search' }}
                        clearIcon={{ type: 'ionicons', name: 'close' }}
                        showLoadingIcon={this.state.showLoadingIcon}
                        containerStyle={styles.searchBarContainer}
                        inputStyle={styles.searchBarInput} />
                </View>

                <ScrollView style={styles.browseScrollView} >

                    <View >
                        <View style={styles.discoverySlideShow}>
                            <Swiper ref="swiper"
                                autoplay={true}
                                loop={true}
                                showsPagination={true}
                                activeDotColor="#E92807"
                                dotColor="#ddd"
                                activeDotStyle={{ marginBottom: -15 }}
                                dotStyle={{ marginBottom: -15 }}
                                // this is where we track which screen is swiped to
                                onIndexChanged={() => { }}
                                scrollEnabled={true} >
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                                <DiscoverySlideShow />
                            </Swiper>
                        </View>
                    </View>
                    <NineGridBlade title="Top Deals" onCategoryNavigate={this.onTopDealNavigate} />
                    <NineGridBlade title="Flash Deals" onCategoryNavigate={this.onTopDealNavigate} />

                    <TwoColumnGridBlade title="More Deals" />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexGrow: 1,
    },
    searchInput: {
        borderColor: 'black', borderWidth: 1, height: 32,
    },
    searchBarContainer: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingTop: 0,
    },
    searchBarInput: {
        backgroundColor: "#eee",
        color: "#000",
        fontSize: 18, height: 34,
        paddingTop: 0
    },
    browseScrollView: {
        flex: 1,
        paddingBottom: 10
    },
    discoverySlideShow: {
        height: 140,
        margin: 10,
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: '#ccc'
    }
})