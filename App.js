import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View, Alert, Button, TouchableOpacity } from 'react-native';

const showAlert = () =>
  Alert.alert("Test Alert", "This is a test alert");

export default function App() {
  const translation = useRef(new Animated.Value(0)).current;
  const [bgColor, setbgColor] = useState(colorChange);
  const animRight = () => Animated.timing(translation, {toValue: 50}).start();

  function colorChange(){
    var color = 'black';
    var x = Math.random();
    console.log(x);
    if (x > .5) {
      color = 'red';
    } else {
      color = 'blue';
    }
    return color;
  }

  //const setbgColor = () => boxColor='red';
  return (
    <View style={styles.container}>
      <Text>Hello, Welcome To My React Playground</Text>
      <Animated.View style={{width: 100, height: 100, backgroundColor: bgColor, transform: [{ translateY: translation,}]}}></Animated.View>
      <TouchableOpacity style={{backgroundColor: 'gray', borderRadius: '20px', padding: '10px', marginTop: '15px', width: '175px'}}onPress={() => setbgColor(colorChange())}><Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>PRESS ME</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
