# Project-7: Tic Tac Toe App
- setup env. for `Tic-Tac-Toe` app
- install npm pkg => `react-native-vector-icons`
- create `component` => `Icons.tsx` and add icons for tictac toe using switch case & also import the `Icon` from `react-native-vector-icons/FontAwesome`
- after importing, run the below `cli` to save its `type`
``` bash 
npm i --save-dev @types/react-native-vector-icons
```
- import `Snackbar` pkg & `Icons` Component ; added `useState`s => `isCross`, `gameWinner`, `gameState` ; fn `reloadGame()` where we set all the states as `default` ; fn `checkWinner()` which has the `logic` for `tic-tac-toe` game ;