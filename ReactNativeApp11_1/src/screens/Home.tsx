import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button 
        title='Go to Details' 
        // method-1:
        // onPress={() => navigation.navigate("Details", {
        //   productId: "86"
        // })}

        // method-2:
        // onPress={() => navigation.navigate("Details")} <= if details in App.tsx is undefined

        // method-3:
        onPress={() => navigation.push('Details', {
          productId: '86'
        })}

        // OR use .replace if we dont want the back btn on navbar
        // onPress={() => navigation.replace('Details', {
        //   productId: '86'
        // })}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        color: '#000000'
    }
})