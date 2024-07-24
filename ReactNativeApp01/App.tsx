import React from 'react'
import { Alert, Button, SafeAreaView, Text, View } from 'react-native'


const App = () => {

  const pressBtn = () => {
    Alert.alert('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, praesentium.!');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>hello world1</Text>
        <Text>hello world2</Text>
        <Text>hello world3</Text>
        <Text>hello world4</Text>
        <Text>hello world5</Text>
        <Text>hello world6</Text>
        <Button title='Click Here' onPress={pressBtn}></Button>
      </View>
    </SafeAreaView>
  )
}

export default App