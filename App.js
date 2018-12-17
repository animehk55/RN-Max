
import React, {Component} from 'react';
import {  Platform, 
          StyleSheet, 
          Text, 
          View,
          TextInput,
          Button
        } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputtext}
          placeholder="Hello animesh how are you "
          value   = {this.state.placeName}
          onChange = {this.placeNameChangeHandler} 
          style={styles.placeInput}
        />
        <Button title="add" style={styles.placebutton} />
        </View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputtext : {
    height : 50,
    width : 250,
    // backgroundColor: "red",
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 20,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  }, 
  placeButton: {
    width: "30%"
  }
});
