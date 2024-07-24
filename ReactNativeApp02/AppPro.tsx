import React from 'react'
import { Alert, Button, StyleSheet, Text, useColorScheme, View } from 'react-native'

const AppPro: () => React.JSX.Element = () => {

    const pressBtn = () => {
        Alert.alert('lorem ipsum');
    };

    const isDarkMode = useColorScheme() === 'dark';

  return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello world!
            </Text>

            <Button title='Click Me' onPress={pressBtn} />
        </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 150,
        marginBottom: 150,
        marginEnd: 50,
        marginStart: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }

});

export default AppPro



// React Native difference from web:

// alignItems  works on x-axis (left to right)
// justifyContent  works on y-axis (top to bottom)