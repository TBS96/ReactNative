import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

const App = () => {
  
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.savContainer}>
      <View style={styles.view}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  savContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  view: {
    backgroundColor: 'red',
    width: 400,
    height: 1080,
    padding: 20
  },
  whiteText: {
    backgroundColor: 'yellow',
    color: 'blue',
    padding: 50,
    fontSize: 36
  },
  darkText: {
    backgroundColor: 'aqua',
    color: 'pink',
    padding: 20,
    fontSize: 36
  }

});

export default App