import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight
} from 'react-native';


//region logo height and width
const logoWidth = Dimensions.get('window').width;
const logoHeight = Dimensions.get('window').height;
//endregion

const ActivityList = React.createClass({



    render() {

        return (
            <View style={styles.container}>
                <Text>Activity</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'stretch',
        backgroundColor: '#fff'
    }
});

module.exports = ActivityList;