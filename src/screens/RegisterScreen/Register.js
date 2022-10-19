import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Register = () => {
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
    color: '#000000'
  }
})

export default Register