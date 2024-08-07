import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Tic Tac Toe</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App