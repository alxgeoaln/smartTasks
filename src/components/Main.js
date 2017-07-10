import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Login from './Login';
import ActivityList from './ActivityList';
const Main = React.createClass({
    getInitialState() {
        return {}
    },
    renderScene(route, nav){
        switch (route.name) {
            case 'activityList':
                return (
                    <ActivityList/>
                );
            default:
                return (
                    <Login/>
                )
        }
    },
    configureScene() {
        return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight
    },
    render() {
        return (
               <Login/>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop: 20,
        backgroundColor: '#fff'
    },
});

module.exports = Main;