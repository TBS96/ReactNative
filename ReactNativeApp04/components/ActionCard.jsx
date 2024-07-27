import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    const openWebsite = (websiteLink) => {
        Linking.openURL(websiteLink)
    }

  return (
    <View>

      <Text style={styles.headingText}>Blog Cards</Text>

      <View style={[styles.card, styles.cardElevated]}>

        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
            Know About Bokeh
            </Text>
        </View>

        <Image 
            source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg',
            }}
            style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus quia sit aspernatur doloribus aut sint rerum voluptates nam debitis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eaque culpa recusandae, beatae necessitatibus tempore aliquam enim obcaecati ipsa eveniet!
            </Text>
        </View>

        <View style={styles.footerContainer}>

            <TouchableOpacity onPress={() => openWebsite('https://www.google.com/')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openWebsite('https://github.com/TBS96')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>

        </View>

      </View>

    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    card: {
        width: 460,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },

    cardElevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.9,
        shadowRadius: 5
    },

    headingContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    cardImage: {
        height: 180,
        marginBottom: 8
    },

    bodyContainer: {
        padding: 10
    },

    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    socialLinks: {
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 6,
        fontSize: 16,
        borderRadius: 6,
        elevation: 6,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 5
    }

})