import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  altWidth,
  bgColor,
  fgColor,
  fontColor
}) => {

  return (
    <View>
      <Pressable
        onpress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgColor ? {backgroundColor: bgColor} : {},
          altWidth ? {width: altWidth} : {},
        ]}
      >
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
            fontColor ? {color: fontColor} : {},
          ]}
        >
          {text}
          <Text style={[styles.text,{color: childColor || fontColor}]}>
            {childText}
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 15,
    marginVerticle: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#8c1114',
    borderColor: '#c16333'
  },
  container_SECONDARY: {
    borderColor: '#8c1114',
    borderWidth: 2,
  },
  container_TERTIARY: {

  },
  text: {
    fontWeight: 'bold',
    color: '#e6dbd0'
  },
  text_SECONDARY: {
    color: '#8c1114'
  },
  text_TERTIARY: {
    color: '#c16333'
  }
});

export default CustomButton