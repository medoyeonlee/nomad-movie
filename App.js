import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo';
 import * as Font from 'expo-font';
import {IonIcons} from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    loaded:false
  }

  handleError = (error)=>{
    console.log(error);
  }

  handleLoaded = ()=>{
    this.setState({loaded:true})
  }

  loadAssets = async()=>{
    await Font.loadSync({
      ...Ionicons.font
    })
  }
  render(){
    const {loaded} = this.state;

    
    return (
      loaded ? <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      : <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError}/>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
