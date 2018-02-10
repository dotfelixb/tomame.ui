import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyAccountScreen extends React.Component {
    static navigationOptions = {
        title: 'My Account'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>My Account Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
    }
})