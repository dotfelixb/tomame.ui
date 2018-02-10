import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Animated } from 'react-native';
import { LinearGradient } from "expo"
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './app/screens/home.screen'
import SearchScreen from './app/screens/search.screen'
import BasketScreen from './app/screens/basket.screen';
import MyAccountScreen from './app/screens/account.scree'
import SettingsScreen from './app/screens/settings.screen'

const tomameColor = '#E92807'

const RootNavigation = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            path: '/',
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? '#E92807' : 'gray'
                    return <Text style={{ color: textColor }}>Home</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? '#E92807' : 'gray'
                    let iconName = focused ? 'ios-compass' : 'ios-compass-outline'
                    return <Ionicons name={iconName} size={25} color={iconColor} />
                }
            }
        },
        Search: {
            screen: SearchScreen,
            path: '/search',
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? '#E92807' : 'gray'
                    return <Text style={{ color: textColor }}>Search</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? '#E92807' : 'gray'
                    let iconName = focused ? 'ios-search' : 'ios-search-outline'
                    return <Ionicons name={iconName} size={25} color={iconColor} />
                }
            }
        },
        Basket: {
            screen: BasketScreen,
            path: '/basket',
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? '#E92807' : 'gray'
                    return <Text style={{ color: textColor }}>Cart</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? '#E92807' : 'gray'
                    let iconName = focused ? 'ios-cart' : 'ios-cart-outline'
                    return <Ionicons name={iconName} size={25} color={iconColor} />
                }
            }
        },
        MyAccount: {
            screen: MyAccountScreen,
            path: '/myaccount',
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? '#E92807' : 'gray'
                    return <Text style={{ color: textColor }}>Me</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? '#E92807' : 'gray'
                    let iconName = focused ? 'ios-contact' : 'ios-contact-outline'
                    return <Ionicons name={iconName} size={25} color={iconColor} />
                }
            }
        },
        Settings: {
            screen: SettingsScreen,
            path: '/settings',
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => {
                    let textColor = focused ? '#E92807' : 'gray'
                    return <Text style={{ color: textColor }}>More</Text>
                },
                tabBarIcon: ({ focused, tintColor }) => {
                    let iconColor = focused ? '#E92807' : 'gray'
                    let iconName = focused ? 'ios-options' : 'ios-options-outline'
                    return <Ionicons name={iconName} size={25} color={iconColor} />
                }
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        configureTransition: (currentTransitionProps, nextTransitionProps) => ({
            timing: Animated.spring,
            tension: 1,
            friction: 35
        }),
        swipeEnabled: false
    }
);

export default class App extends React.Component {
    constructor(props) {
        super(props)

        StatusBar.setBarStyle("dark-content", true)
    }

    render() {
        return (
            <RootNavigation />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E92807',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 180,
        height: 180
    }
});
