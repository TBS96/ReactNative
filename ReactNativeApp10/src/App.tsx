import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { setupPlayer, addTrack } from '../musicPlayerServices'

const App = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const setup = async() => {
    let isSetup = await setupPlayer();
    if(isSetup)
    {
      await addTrack();
    }
    setIsPlayerReady(isSetup);
  };

  useEffect(() => {
    setup();
  }, [])

  // if the player is not ready, render below code using <ActivityIndicator>. Its just a loading screen like youtube buffering
  if(!isPlayerReady)
  {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})