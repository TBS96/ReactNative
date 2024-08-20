# Project-9: ReactNavigation
- setup env. for `React Navigation` app ; install `npm install @react-navigation/native` ; Installing dependencies into a bare React Native project: `npm install react-native-screens react-native-safe-area-context`; Install Native Stack Navigator: `npm install @react-navigation/native-stack`
<br><br>
- created screens `Home.tsx` & `Details.tsx` and imported them in `App.tsx`
<br><br>
- `import { NavigationContainer } from '@react-navigation/native'` & `import { createNativeStackNavigator } from '@react-navigation/native-stack'`
<br><br>
- `export type RootStackParamList={...}` ; `Stack=createNativeStackNavigator<RootStackParamList>();` <= for typesafety(optional); render screens `Home` & `Details` using components: `<NavigationContainer>`, `<Stack.Navigator>`, `<Stack.Screen>`
<br><br>
- setup Home screen for navigaton ; `import { NativeStackScreenProps } from '@react-navigation/native-stack'` ; `import { RootStackParamList } from '../App'` ; `type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>` ; destructuring '`navigation`' of type `HomeProps` ; rendering to navigate to details screen pressing a button using 3 methods
<br><br>
- Handling `params` in Details screen => `import { NativeStackScreenProps } from '@react-navigation/native-stack'` ; `import { RootStackParamList } from '../App'` ; `import { useNavigation } from '@react-navigation/native'` ; `import { NativeStackNavigationProp } from '@react-navigation/native-stack'` ; `({route}: DetailsProps)` ; `const {productId} = route.params` ; `useNavigation()` hook => `navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()` ; `navigation.navigate('Home')` OR `navigation.goBack()` AND `navigation.pop(2)` OR navigation.popToTop()`
<br><br>