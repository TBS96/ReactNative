# Project-6: Currency Converter
- setup env. for `CurrencyConverter` app
- create `index.d.ts` and define an `interface Currency` with properties: `name`, `value`, `flag`, `symbol` & a file named `constants.ts` where we `export` `currencyByRupee[]` array having `objects` of different country details
- create component `CurrenctBtn.tsx`
- importing `currencyByRupee` from `'./constants'`, `CurrencyBtn` from `'./components/CurrencyBtn'` & `Snackbar` from `'react-native-snackbar'` pkg
- declare `useState`s for `inputValue`, `resultValue`, `targetCurrency`; create fn `btnPressed(Currency)` where we create logic for entering valid input value with the help of `Snackbar` pkg <a href="https://www.npmjs.com/package/react-native-snackbar">https://www.npmjs.com/package/react-native-snackbar</a>
- added views for data rendering with the help of `<FlatList>`