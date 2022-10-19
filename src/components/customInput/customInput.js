import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[styles.input]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#a2a6a5',
      width: '80%',
      height: 45,
      
      borderColor: '#c16333',
      borderWidth: 1,
      borderRadius: 5,
      
      paddingHorizontal: 10,
      marginVertical: 5,
  },
  input: {
      flex: 1,
      alignContent: 'flex-start',
      justifyContent: 'center',
      color: '#000000'
  },
});

export default CustomInput