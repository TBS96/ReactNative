import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"

// Form Validation
import * as Yup from 'yup'
import { Formik } from 'formik'


const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
})


const App = () => {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);


  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for(let i = 0; i < passwordLength; i++)
    {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }


  const generatePasswordStr = (passwordLength: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = "~`!@#$%^&*()_+=-[]{}:;'<>,./";

    if(upperCase)
    {
      characterList += upperCaseChars;
    }
    if(lowerCase)
    {
      characterList += lowerCaseChars;
    }
    if(numbers)
    {
      characterList += digitChars;
    }
    if(symbols)
    {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }


  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }


  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Random Password Generator</Text>

          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              // to convert a string into integer(number), we can use either 'Number' or 'parseInt' as shown below:
              generatePasswordStr(Number(values.passwordLength));
              // generatePasswordStr(parseInt(values.passwordLength));

              // for ts specific:
              // generatePasswordStr(+values.passwordLength);
            }}
          >
            {/* below are destructured props that are in {.....} */}
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              // handleBlur,
              handleSubmit,
              // isSubmitting,
              handleReset,

              /* and other goodies */
            }) => (
              <>

              {/* Password length with textinput starts */}
                <View style={styles.inputWrapper}>

                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput 
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='Ex. 8'
                      keyboardType='numeric'>
                  </TextInput>

                </View>
                {/* Password length with textinput ends */}


                {/* Lowercase with checkbox starts */}
                <View style={styles.inputWrapper}>

                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include LowerCase</Text>
                  </View>

                    <View style={styles.inputColumn}>
                    <BouncyCheckbox 
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor='#15A0E5'
                    />
                    </View>

                </View>
                {/* Lowercase with checkbox ends */}
                

                {/* Uppercase with checkbox starts */}
                <View style={styles.inputWrapper}>

                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include UpperCase</Text>
                  </View>

                  <View style={styles.inputColumn}>
                    <BouncyCheckbox 
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor='#15A0E5'
                    />
                  </View>

                </View>
                {/* Uppercase with checkbox ends */}


                {/* Numbers with checkbox starts */}
                <View style={styles.inputWrapper}>

                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include Numbers</Text>
                  </View>

                  <View style={styles.inputColumn}>
                    <BouncyCheckbox 
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor='#15A0E5'
                    />
                  </View>

                </View>
                {/* Numbers with checkbox ends */}


                {/* Symbols with checkbox starts */}
                <View style={styles.inputWrapper}>

                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Include Symbols</Text>
                  </View>

                  <View style={styles.inputColumn}>
                    <BouncyCheckbox 
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor='#15A0E5'
                    />
                  </View>

                </View>
                {/* Symbols with checkbox ends */}


                {/* Form action btns starts */}
                <View style={styles.formActions}>

                  <TouchableOpacity 
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit as any}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>


                  <TouchableOpacity 
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>

                </View>
                {/* Form action btns ends */}

              </>
            )}
          </Formik>

        </View>

        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press To Copy</Text>
            <Text selectable style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}

      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 50,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#DF8524',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#FF2E0E',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  }
})



// External Packages used:

// Yup is a pkg used for validation. Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation. syntax is shown above
// https://www.npmjs.com/package/yup


// https://www.npmjs.com/package/react-native-bouncy-checkbox

// https://formik.org/docs/overview