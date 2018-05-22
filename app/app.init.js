import React from "react";
import { Text } from "react-native";
import { TabNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";

// top level screens

import SearchScreen from "./screens/search.screen";
import BasketScreen from "./screens/basket.screen";
import MyAccountScreen from "./screens/account.scree";
import SettingsScreen from "./screens/settings.screen";
import HomeScreen from "./screens/home.screen";

const AppTabs = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            path: "/",
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? "#E92807" : "gray";
                    return <Text style={{ color: textColor }}>Browse</Text>;
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? "#E92807" : "gray";
                    let iconName = focused ? "ios-compass" : "ios-compass-outline";
                    return <Ionicons name={iconName} size={25} color={iconColor} />;
                }
            }
        },
        Search: {
            screen: SearchScreen,
            path: "/search",
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? "#E92807" : "gray";
                    return <Text style={{ color: textColor }}>Search</Text>;
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? "#E92807" : "gray";
                    let iconName = focused ? "ios-search" : "ios-search-outline";
                    return <Ionicons name={iconName} size={25} color={iconColor} />;
                }
            }
        },
        Basket: {
            screen: BasketScreen,
            path: "/basket",
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? "#E92807" : "gray";
                    return <Text style={{ color: textColor }}>Cart</Text>;
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? "#E92807" : "gray";
                    let iconName = focused ? "ios-cart" : "ios-cart-outline";
                    return <Ionicons name={iconName} size={25} color={iconColor} />;
                }
            }
        },
        MyAccount: {
            screen: MyAccountScreen,
            path: "/myaccount",
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? "#E92807" : "gray";
                    return <Text style={{ color: textColor }}>Me</Text>;
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? "#E92807" : "gray";
                    let iconName = focused ? "ios-contact" : "ios-contact-outline";
                    return <Ionicons name={iconName} size={25} color={iconColor} />;
                }
            }
        },
        Settings: {
            screen: SettingsScreen,
            path: "/settings",
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? "#E92807" : "gray";
                    return <Text style={{ color: textColor }}>More</Text>;
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? "#E92807" : "gray";
                    let iconName = focused ? "ios-options" : "ios-options-outline";
                    return <Ionicons name={iconName} size={25} color={iconColor} />;
                }
            }
        }
    },
    {
        tabBarPosition: "bottom",
        animationEnabled: false,
        swipeEnabled: false
    }
);

export default class AppInit extends React.Component {
    render() {
        return <AppTabs />;
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E92807",
        alignItems: "center",
        justifyContent: "center"
    },
    gradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 180,
        height: 180
    }
});
