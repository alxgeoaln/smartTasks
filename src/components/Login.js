import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    Image,
    TextInput
} from 'react-native';
import ActivityList from './ActivityList';

//region logo height and width
const logoWidth = Dimensions.get('window').width;
const logoHeight = Dimensions.get('window').height;
//endregion

class Login extends React.Component {
    state = {
        isPressed: false
    };

    login(){
        this.setState({
            isPressed: true
        });
        console.log(this.state);
    }

    render() {
        const renderView = () => {
            if (this.state.isPressed) {
                return (
                    <ActivityList/>
                )

            } else {
                return (
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={styles.logo}
                                source={require('../img/smartTasksAvitech.jpg')}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Username"
                                    underlineColorAndroid="#fff"
                                />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Password"
                                    underlineColorAndroid="#fff"
                                />
                            </View>
                        </View>
                        <TouchableHighlight
                            style={styles.loginButton}
                            onPress={() => this.login()}

                        >
                            <View
                                style={{
                                    flex: 1, flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{fontSize: 20, fontWeight: 'bold'}}
                                >
                                    Login
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                )
            }
        }
        return (
            <View style={{flex: 1}}>
                {renderView()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    logo: {
        width: logoWidth * .9,
        height: 100,
        top: 50
    },
    inputContainer: {
        marginTop: 100,

    },
    input: {
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 2,
        width: logoWidth * .9
    },
    loginButton: {
        width: logoWidth * .9,
        height: 60,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        marginTop: 10
    }
});

module.exports = Login;