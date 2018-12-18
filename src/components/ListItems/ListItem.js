import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItems = (props) => {
   return <View style={styles.listItems}>
        <Text>{props.placeName}</Text>
    </View>
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: "#eee"
    }
});

export default listItems;
