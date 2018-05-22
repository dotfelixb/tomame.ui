import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { SearchBar } from "react-native-elements";

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoadingIcon: false
        };
    }

    static navigationOptions = {
        title: "Search"
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <SearchBar
                        placeholder="I'm looking for..."
                        platform="ios"
                        autoCorrect={false}
                        icon={{ type: "ionicons", name: "search" }}
                        clearIcon={{ type: "ionicons", name: "close" }}
                        showLoadingIcon={this.state.showLoadingIcon}
                        containerStyle={styles.searchBarContainer}
                        inputStyle={styles.searchBarInput}
                    />
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        paddingTop: 20,
        flexGrow: 1
    },
    searchBarContainer: {
        backgroundColor: "#fff",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingTop: 0
    },
    searchBarInput: {
        backgroundColor: "#eee",
        color: "#000",
        fontSize: 18,
        height: 34,
        paddingTop: 0
    }
});
