import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
        
      <Text style={styles.headingText}>Trending Places</Text>

        <View style={[styles.card, styles.cardElevated]} horizontal>

            <Image
                source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
            }}
                style={styles.cardImage}
            />
            
            <View style={styles.cardbody}>

                <Text style={styles.cardTitle}>Hawa Mahal</Text>

                <Text style={styles.cardLabel}>Pink city, Jaipur</Text>

                <Text style={styles.cardDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab vero maxime. Animi ducimus quibusdam ea, sit expedita voluptatum autem nisi nobis, voluptatem numquam suscipit.</Text>
                
                <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>12 mins away</Text>
                </View>

            </View>

        </View>

    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    card: {
        width: 450,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },

    cardElevated: {
        backgroundColor: '#25B35B',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },

    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },

    cardbody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },

    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },

    cardLabel: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },

    cardDesc: {
        color: '#242B2E',
        fontSize: 13,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },

    cardFooter: {
        paddingTop: 20,
        flex: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    cardFooterText: {
        color: '#000000',
    },
})