import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = (
  value,
  setValue,
  placeholder,
  secureTextEntry
) => {

  return (
    <View>
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
      height: 50,
      
      borderColor: '#c16333',
      borderWidth: 1,
      borderRadius: 5,
      
      paddingHorizontal: 10,
      marginVertical: 5,
  },
  input: {
      flex: 1,
      alignContent: 'flex-start',
      justifyContent: 'center'
  },
});

export default CustomInput