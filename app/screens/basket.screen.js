import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BasketScreen extends React.Component {
    static navigationOptions = {
        title: 'Basket'
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Basket Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
    }
})