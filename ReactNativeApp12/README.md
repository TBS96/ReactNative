# Project-11: Appwrite Authentication
- setup env. for `Appwrite Authentication` app
<br><br>

- ## Dependencies need to install:
- Navigation dependencies:
- - `npm install @react-navigation/native` ,
- - `npm install react-native-screens react-native-safe-area-context` ,
- - `npm install @react-navigation/native-stack` <br><br>

- NPM pkgs for UI:
- - `npm i @rneui/themed` ,
- - `npm i @rneui/base` <br><br>

- NPM pkg for config:  `npm i react-native-config` (See instructions for `Manual Link(Android)` & `Extra step for Android`)

- NPM pkg for popups down the screen: `npm i react-native-snackbar`

- RN Vector Icons: `npm i react-native-vector-icons` (Go to `android/app/build.gradle` and do apply the method that's shown in docs!)

- AppWrite: `npm i appwrite` <br><br>

- ### Create .env file to store `project_id` & `api_endpoint`

- ### Create `src/appwrite/service.ts` where we create `appwriteService class` to `createAccount()`, `login()`, `getCurrentUser()`, `logout()` ; all of this is to store user data in AppWrite DB

- ### Create `AppwriteContext`, where we are calling `AppwriteService`, checking `isLoggedIn` using `useState`, & providing `defaultValue` as `AppwriteContext`'s value where we're rendering `{children}`

- ### Create component `Loading.tsx` where we are just rendering some loading using `ActivityIndicator`

- ### Creating 3 routes => `AppStack.tsx`(route where the application actually lives) ; `AuthStack.tsx`(route where the user will be redirected back to the login or register) ; `Router.tsx`(route where we'll be checking using `useEffect` hook, for simply checking whether the user is logged in, based on user is logged in or not, if user is not logged in, we'll be serving user Auth, and if logged in, we'll be serving user in app.AppStack)

- ### Create screens: `Home.tsx`, `Login.tsx`, `Signup.tsx`

- ### Create `AppStack` and import `Home` screen ; `Stack=createNativeStackNavigator()`

- ### Create `AuthStack` and import `Login` & `Signup` screens ; `Stack=createNativeStackNavigator()`

- ### Create `Router.tsx` where we are importing `AppwriteContext` , `Loading` , Routes: `AppStack` & `AuthStack` ; `useState()` to check `isLoading` ; `useContext(AppwriteContext)` ; `useEffect(() => {...})` ; component: `<NavigationContainer>` and checking if `isLoggedIn` then render route `<AppStack/>` else render route `<AuthStack />`

- ### `Home Screen`: `import { FAB } from '@rneui/themed'` , `import Snackbar from 'react-native-snackbar'` , `import { AppwriteContext } from '../appWrite/AppwriteContext'` ; render `userData`

- ### `Signup Screen`: import `NativeStackScreenProps`, `AuthStackParamList` for navigation ; `useContext(AppwriteContext)` ; useStates => `error`, `name`, `email`, `password`, `repeatPassword` ; `handleSignup()` ; render with new component class `<KeyboardAvoidingView>` with `Platform` ; create form for the useState variables using `TextInput` ; `Pressable` btns for signup and Already have an account,  then `Login` with `navigation.navigate('Login')`

- ### `Login Screen`: import `NativeStackScreenProps`, `AuthStackParamList` for navigation ; `useContext(AppwriteContext)` ; useStates => `error`, `email`, `password` ; `handleLogin()` ; render with new component class `<KeyboardAvoidingView>` with `Platform` ; create form for the useState variables using `TextInput` ; `Pressable` btns for Login and Don't have an account,  then `Signup` with `navigation.navigate('Signup')`