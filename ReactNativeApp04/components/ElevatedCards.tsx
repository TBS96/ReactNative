import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>

      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView horizontal={true} style={styles.container}>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😂😂</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8
    },
    cardElevated :{
        backgroundColor: 'red',
        elevation: 4, // can only be seen as a black bar if screen is 4K or above
        shadowOffset: {
            width: 220,
            height: 500,
        },
        shadowColor: 'yellow',
        shadowOpacity: 0.6,
        shadowRadius: 5
    }
})


// shadowOffset, shadowColor, shadowOpacity, shadowRadius properties works like box-shadow in css