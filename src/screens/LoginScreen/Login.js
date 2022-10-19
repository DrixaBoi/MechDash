import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    width: '100%',
    color: '#000000'
  }
})

export default Login