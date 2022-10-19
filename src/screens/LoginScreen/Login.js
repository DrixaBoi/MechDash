import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Images
import Logo from '../../../assets/mechanicus.png';

// components
import CustomInput from '../../components/CustomInput/CustomInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode='contain'
        />
        <View style={styles.input_container}>
          <CustomInput
            placeholder="Email"
            value={username}
            setValue={setUsername}
          />

          <CustomInput
            placeholder="Password"
            value={userPassword}
            setValue={setUserPassword}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#555f64'
  },
  logo: {
    width: '70%',
    maxWidth: 400,
    maxHeight: 400
  },
  input_container: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    color: '#e6dbd0'
  }
})

export default Login