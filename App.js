/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 5 cot 2 dong
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Alert, Image, Dimensions, TouchableOpacity, TextInput,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component <Props> {
  AlertNoti (){
    alert('Đăng nhập thành công');
  }
  render() {
    return (
     
      <View style={styles.container}>
       <Image source={require("./Background.jpg")} style= {{width: 500, height: 200, justifyContent: 'center', marginBottom: 50}} />
       <Text style={{color: 'black', textAlign: 'center', fontSize: 40, paddingTop: 0}}> Onblick </Text> 
       <View style={{flexDirection:"row"}}>
     <TextInput style = {{flex: 1, width: 50, height: 50, color: 'red', fontSize: 20}}
     placeholder={"Tên người dùng"}/>
      <TextInput style = {{flex: 1, width: 50, height: 50, color: 'black', fontSize: 20}} 
      placeholder="Mật khẩu" />
      </View> 
      <TextInput style = {{ height: 50, color: 'white', fontSize: 20}} placeholder={'Email'}/>
      <TextInput style = {{ height: 50, color: 'white' ,fontSize: 20}} placeholder = {'Password'}/>
      <TextInput style = {{height: 50, color: 'white', fontSize: 20}} placeholder = {'Mobile'} />
      <Button title="Đăng nhập" color="red"
      onPress={this.AlertNoti}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0080ff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
