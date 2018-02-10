import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showLoadingIcon: false
        }
    }

    static navigationOptions = {
        title: 'Home'
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
                        containerStyle={{ backgroundColor: '#fff', borderTopWidth: 0, borderBottomWidth: 0 }}
                        inputStyle={{ backgroundColor: "#eee", color: "#000", fontSize: 16, height: 32 }} />
                </View>

                <ScrollView style={{ flexGrow: 1 }} >
                    <View style={{ backgroundColor: '#555', height: 240 }}>
                    </View>
                    <View style={{ backgroundColor: '#666', height: 240 }}>
                    </View>
                    <View style={{ backgroundColor: '#777', height: 240 }}>
                    </View>
                    <View style={{ backgroundColor: '#888', height: 240 }}>
                    </View>
                    <View style={{ backgroundColor: '#999', height: 240 }}>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flexGrow: 1,
    },
    searchInput: { borderColor: 'black', borderWidth: 1, height: 32, }
})