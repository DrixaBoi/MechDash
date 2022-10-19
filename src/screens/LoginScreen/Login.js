import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

// Images
import Logo from '../../../assets/mechanicus.png';

// components
import CustomInput from '../../components/CustomInput/CustomInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigation = useNavigation();

  const [loaded] = useFonts({
    CENSCBK: require('../../../assets/fonts/CENSCBK.TTF'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode='contain'
        />
      
        <CustomInput
          placeholder="Email"
          value={username}
          setValue={setUsername}
          maxLength={30}
        />

        <CustomInput
          placeholder="Password"
          value={userPassword}
          setValue={setUserPassword}
          secureTextEntry={true}
          maxLength={20}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#555f64',
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 400,
    maxHeight: 400,
    marginTop: 80
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'CENSCBK'
  }
});

export default Login