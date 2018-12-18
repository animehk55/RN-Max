
import React, {Component} from 'react';
import {  Platform, 
          StyleSheet, 
          Text, 
          View,
          TextInput,
          Button
        } from 'react-native';
import ListItem from './src/components/ListItems/ListItem'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.placeSubmitHandler=this.placeSubmitHandler.bind(this);
  }
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState ({
      placeName: val
    });
  };
  
  placeSubmitHandler = () => {
    //  if (this.state.placeName.trim() === "") {
    //    return;
    //  }

     this.setState(prevState => {
       return {
         places: prevState.places.concat(prevState.placeName)
       };
     });
  };
  
  render() {
    const placeOutput = this.state.places.map(( place, i ) => {
     return <ListItem 
     key={i} placeName={place} />
    //  return <ListItem placeName='place' />
    });
    
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textColor}
          placeholder="Hello Webelight"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.inputText}
        />
        <Button title="Add" style={styles.placeButton} onPress={()=>this.placeSubmitHandler()} />
      </View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style= {styles.listContainer} >
          {placeOutput}
        </View>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: "sans-serif",
    fontSize: 11,
    color: "#ff3478"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText : {
    height : 50,
    width : 250,
    borderColor: "green",
    // borderRadius: 20,
    color: "black",
    // backgroundColor: "red",
    borderColor: 'red'

  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer : {
    width: "100%"
  }
});
