import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/Nav';
import Screen from './screen/Screen'
export default function App() {
  return (
    <Nav />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
