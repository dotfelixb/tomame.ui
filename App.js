import React from "react";
import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import EStyleSheet from "react-native-extended-stylesheet";

// stack level screens
import CategoryScreen from "./app/screens/category.screen";
import AppInit from "./app/app.init.js";

const RootNavigation = () => {
    return StackNavigator(
        {
            SignedIn: {
                screen: AppInit
            },
            Category: {
                screen: CategoryScreen
            }
        },
        {
            headerMode: "none",
            cardStyle: { backgroundColor: "#fff" }
        }
    );
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        EStyleSheet.build({
            $tomameColor: "#E92807"
        });

        StatusBar.setBarStyle("dark-content", true);
    }

    render() {
        const Layout = RootNavigation();

        return <Layout />;
    }
}
