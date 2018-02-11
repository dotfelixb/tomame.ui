import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'

export default class CategoryScreen extends React.Component {
    static navigationOptions = {
        title: 'Search'
    }

    render() {

        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'Category' }}
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