import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'


const App = () => {

  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');

  // Fill with 'empty' from pos. 0 to 9
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0 ,9));


  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0 ,9));
  };


  const checkIsWinner = () => {

    // first row
    if((gameState[0] === gameState[1]) && (gameState[1] === gameState[2]) && (gameState[0] !== 'empty'))
    {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }

    // second row
    else if((gameState[3] === gameState[4]) && (gameState[4] === gameState[5]) && (gameState[3] !== 'empty'))
    {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    }
    
    // third row
    else if((gameState[6] === gameState[7]) && (gameState[7] === gameState[8]) && (gameState[6] !== 'empty'))
    {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    }

    // first column
    else if((gameState[0] === gameState[3]) && (gameState[3] === gameState[6]) && (gameState[0] !== 'empty'))
    {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }

    // second column
    else if((gameState[1] === gameState[4]) && (gameState[4] === gameState[7]) && (gameState[1] !== 'empty'))
    {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    }

    // third column
    else if((gameState[2] === gameState[5]) && (gameState[5] === gameState[8]) && (gameState[2] !== 'empty'))
    {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }

    // diag. top-left to bottom-right
    else if((gameState[0] === gameState[4]) && (gameState[4] === gameState[8]) && (gameState[0] !== 'empty'))
    {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }

    // diag. top-right to bottom-left
    else if((gameState[2] === gameState[4]) && (gameState[4] === gameState[6]) && (gameState[2] !== 'empty'))
    {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }

    // for draw (no empty cells left)
    else if(!gameState.includes('empty', 0))
    {
      setGameWinner('Draw game... ⌛️');
    }

  };


  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Tic Tac Toe</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App