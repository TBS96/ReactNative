import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import ElevatedCards2 from './components/ElevatedCards2'
import FancyCards from './components/FancyCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <ElevatedCards2></ElevatedCards2>
        <FancyCards></FancyCards>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App