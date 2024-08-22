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

- ## Create .env file to store `project_id` & `api_endpoint`

- ## Create `src/appwrite/service.ts` where we create `appwriteService class` to `createAccount()`, `login()`, `getCurrentUser()`, `logout()` ; all of this is to store user data in AppWrite DB

- ## Create `AppwriteContext`, where we are calling `AppwriteService`, checking `isLoggedIn` using `useState`, & providing `defaultValue` as `AppwriteContext`'s value where we're rendering `{children}`

- ## Create component `Loading.tsx` where we are just rendering some loading using `ActivityIndicator`