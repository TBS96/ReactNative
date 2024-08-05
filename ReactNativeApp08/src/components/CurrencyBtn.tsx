import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name: string,
    flag: string
}>


const CurrencyBtn = (props: CurrencyBtnProps): React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

export default CurrencyBtn

const styles = StyleSheet.create({
    buttonContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    }
})