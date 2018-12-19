import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

const listItems = (props) => {
   return (
   <TouchableNativeFeedback onPress={props.onItemPressed}>
   
       <View style={styles.listItem} >
        <Image 
            resizeMode= "cover" 
            source={props.placeImage} 
            style={styles.placeImage} 
        />
        <Text>{props.placeName}</Text>
        </View>
   </TouchableNativeFeedback>
   );
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:100
    },
    allSide: {
        // borderWidth: 2
    }
});

export default listItems;
