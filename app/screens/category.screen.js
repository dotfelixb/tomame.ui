import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default class CategoryScreen extends React.Component {

    render() {

        const leftComponent = (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <SimpleLineIcons name="arrow-left" size={26} color="#333" />
            </TouchableOpacity>
        )
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={leftComponent}
                    centerComponent={{ text: 'Category' }}
                    backgroundColor="#fff"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
    }
})