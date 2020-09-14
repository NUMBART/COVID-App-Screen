import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

Feature = props => {
    return (
        <View style={styles.feature}>
            <TouchableOpacity>
                <View style={styles.feature}>
                    {props.icon}
                    <Text style={[{fontSize:10}, {textAlign:'center'}]}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

styles = StyleSheet.create({
    feature: {
        height: 80,
        width: 70,
        alignItems: 'center',
    }
});

export default Feature;