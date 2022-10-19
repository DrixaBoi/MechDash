import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Images
import Logo from '../../../assets/mechanicus.png';

// components
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign In Pressed')
  };

  const onForgotPressed = () => {
    console.warn('Forgot Pressed')
  };

  const onRegisterPressed = () => {
    navigation.navigate('Register')
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.title}>Welcome User</Text>
        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={userPassword}
          setValue={setUserPassword}
          secureTextEntry={true}
        />

        <CustomButton 
          text='Sign In'
          onPress={onSignInPressed}
        />

        <CustomButton 
          text='Forgot Password?'
          onPress={onForgotPressed}
          type="TERTIARY"
        />

        <CustomButton 
          text="Don't have access?"
          childText=" Register!"
          onPress={onRegisterPressed}
          type="TERTIARY"
          fontColor='#e7ddd2'
          childColor='#c06436'
        />

        <SocialSignInButtons />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#555f64',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#e7ddd2'
  }
});

export default Login