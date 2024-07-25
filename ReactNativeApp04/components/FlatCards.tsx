import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>

      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>

        <View style={[styles.card, styles.cardOne]}>
            <Text>Orange</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardFour]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardFive]}>
            <Text>Purple</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        // paddingStart: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#ffe4c4a8'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: 100,
        // width: '20%',
        width: 110,
        height: 100,
        borderRadius: 5,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#ef5954'
    },
    cardTwo: {
        backgroundColor: 'green'
    },
    cardThree: {
        backgroundColor: 'blue'
    },
    cardFour: {
        backgroundColor: 'red'
    },
    cardFive: {
        backgroundColor: 'purple'
    }
});