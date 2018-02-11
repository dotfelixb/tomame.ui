import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid'
import PropType from 'prop-types'

export class NineGridBlade extends React.Component {
    static propType = {
        title: PropType.string.isRequired
    }

    render() {

        return (
            <View style={styles.browseBladeContainer}>
                <View>
                    <Text style={styles.browseBladeText}>
                        {this.props.title}
                    </Text>
                </View>

                <View style={styles.browseBlade}>
                    <Grid>
                        <Col>
                            <Row></Row>
                            <Row></Row>
                            <Row></Row>
                        </Col>
                        <Col>
                            <Row></Row>
                            <Row></Row>
                            <Row></Row>
                        </Col>
                        <Col>
                            <Row></Row>
                            <Row></Row>
                            <Row></Row>
                        </Col>
                    </Grid>
                </View>
            </View>
        )
    }
}

export class TwoColumnGridBlade extends React.Component {
    static propType = {
        title: PropType.string.isRequired
    }

    render() {

        return (
            <View style={styles.browseBladeContainer}>
                <View>
                    <Text style={styles.browseBladeText}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.browseBlade}>
                    <Grid>
                        <Col></Col>
                        <Col></Col>
                    </Grid>
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    browseBladeContainer: {
        borderTopWidth: 10,
        borderTopColor: "#eee",
        // height: 360
    },
    browseBlade: {
        // backgroundColor: '#eee',
        margin: 10,
        marginTop: 0,
        height: 360,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eee",
    },
    browseBladeText: {
        fontSize: 22,
        fontWeight: '800',
        padding: 10,
    }
})
