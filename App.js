import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import SectionListBasics from './components/SectionListBasics';
import FlatListBasics from './components/FlatListBasics';

export default function App() {

 

  return (
    <View style={styles.container}>
      <SectionListBasics/>
      <FlatListBasics/>

    </View>

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  boxStyle: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    backgroundColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  item: {
    marginTop: 24, 
    padding: 30, 
    height: 30 ,
    backgroundColor: 'white',
    fontSize: 24,
  }
});