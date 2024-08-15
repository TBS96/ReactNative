import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ControlCenter = () => {

    const playBackState = usePlaybackState();

    const skipToNext = async() => {
        await TrackPlayer.skipToNext();
    };

    const skipToPrevious = async() => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async(playback: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();

        if(currentTrack !== null)
        {
            if(playback === State.Paused || playback === State.Ready)
            {
                await TrackPlayer.play();
            }
            else
            {
                await TrackPlayer.pause();
            }
        }
    };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => {
          if(playBackState.state !== undefined)
          {
            togglePlayback(playBackState.state)
          }
        }}>
        <Icon 
            style={styles.icon} 
            name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
            size={75} 
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter