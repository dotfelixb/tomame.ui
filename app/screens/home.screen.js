import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
    }
})