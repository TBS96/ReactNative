# Project-10: ReactNavigationForE-commerce
- setup env. for `React Navigation` app ; install `npm install @react-navigation/native` ; Installing dependencies into a bare React Native project: `npm install react-native-screens react-native-safe-area-context`; Install Native Stack Navigator: `npm install @react-navigation/native-stack`
<br><br>
- import Navigation stuffs and render in App.tsx ; create screens: `Home.tsx` & `Details.tsx` ; and `index.d.ts` as interface declaration of data types
<br><br>
- added static data => `PRODUCTS_LIST` of type `Products[]` in `src/data/constants.ts`
<br><br>
- create components `Separator.tsx` & `ProductItem.tsx` with StyleSheet
<br><br>
- destructure `{product}` from `src/data/constants.ts` using `PropsWithChildren` in `ProductItem.tsx` component ; and render them
<br><br>
- import `Navigation`, `Components` & `Data` in `Home.tsx` ; Render `PRODUCT_LIST` using `<Flatlist>` ; added styles for container
<br><br>
- import Navigation stuffs ; `RootStackParamList` ; render details of each product
<br><br>