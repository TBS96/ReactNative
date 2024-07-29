import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
})

const App = () => {

  const [password, setPassword] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordStr = (passwordLength) => {}

  const createPassword = (characters, passwordLength) => {}

  const resetPasswordState = () => {}

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})




// Yup is a pkg used for validation. Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation. syntax is shown above
// https://www.npmjs.com/package/yup