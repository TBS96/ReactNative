import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards2 = () => {

  return (
    <View>

        <Text style={styles.headingText}>Elevated Cards With Buttons</Text>

        <ScrollView style={styles.container} horizontal>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg1]}>
                <Text>Box1</Text>
                <Button 
                    title='Btn1'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 1!')}
                />
            </View>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg2]}>
                <Text>Box2</Text>
                <Button 
                    title='Btn2'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 2!')}
                />
            </View>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg3]}>
                <Text>Box3</Text>
                <Button 
                    title='Btn3'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 3!')}
                />
            </View>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg4]}>
                <Text>Box4</Text>
                <Button 
                    title='Btn4'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 4!')}
                />
            </View>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg5]}>
                <Text>Box5</Text>
                <Button 
                    title='Btn5'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 5!')}
                />
            </View>

            <View style={[styles.card, styles.cardElevated, styles.cardElevatedBg6]}>
                <Text>Box6</Text>
                <Button 
                    title='Btn6'
                    color={'black'}
                    onPress={() => Alert.alert('btn pressed - 6!')}
                />
            </View>

        </ScrollView>

        <Button 
            title='click'
            color={'pink'}
            onPress={() => Alert.alert('Check alert')} 
        />

    </View>
  )
}

export default ElevatedCards2

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
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
        elevation: 5,
        shadowOffset: {
            width: 220,
            height: 500,
        },
        shadowColor: 'yellow',
        shadowOpacity: 0.6,
        shadowRadius: 5
    },
    cardElevatedBg1: {
        backgroundColor: 'red'
    },
    cardElevatedBg2: {
        backgroundColor: '#ef5954'
    },
    cardElevatedBg3: {
        backgroundColor: 'green'
    },
    cardElevatedBg4: {
        backgroundColor: '#34C0F1'
    },
    cardElevatedBg5: {
        backgroundColor: '#FFCD43'
    },
    cardElevatedBg6: {
        backgroundColor: 'purple'
    },
})