import { View, Text, Pressable, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'

// image logos
import Facebook from '../../../assets/facebook.png'
import Google from '../../../assets/google.png'
import Apple from '../../../assets/apple.png'

const SocialSignInButtons = (onPress) => {
    const onSignInFacebook = () => {
        console.warn("Sign in with Facebook");
    };

    const onSignInGoogle = () => {
        console.warn("Sign in with Google");
    };

    const onSignInApple = () => {
        console.warn("Sign in with Apple");
    };

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>
                Or continue with a social account
            </Text>      
        
            <View style={styles.button_container}>
                <Pressable 
                    style={styles.button}
                    onPress={onSignInFacebook}
                >
                    <Image 
                        style={styles.logo}
                        source={Facebook}
                        resizeMode='contain'  
                    />
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={onSignInGoogle}
                >
                    <Image 
                        style={styles.logo}
                        source={Google}
                        resizeMode='contain'  
                    />
                </Pressable>
                <Pressable 
                    style={styles.button}
                    onPress={onSignInApple}
                >
                    <Image 
                        style={styles.logo}
                        source={Apple}
                        resizeMode='contain'    
                    />
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        color: '#e7ddd2'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,

        backgroundColor: '#e7ddd2',
        
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    logo: {
        width: 30,
        height: 30,
    },
});

export default SocialSignInButtons