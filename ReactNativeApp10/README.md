# Project-8: Music Player
- setup env. for `Music Player` app ; added `react-native-track-player` npm pkg ; created folder `assets` having few mp3 files
<br><br>
- created file `constants.ts` from where we are `exporting` an array of objects that contains metadata of audio files ; `import { Track } from 'react-native-track-player'` npm pkg
<br><br>
- create file `playbackServices.js` in `root dir.` & import `TrackPlayer` from `react-native-track-player`,` playListData` from `constants.ts` and create `async` fn `playbackService()` ; in `index.js` import `TrackPlayer` & `playbackService` & register `AppRegistry.registerComponent()` like this: `TrackPlayer.registerPlaybackService(() => playbackService)`
<br><br>
- create `musicPlayerServices.js` & add fns. using `async-await`: `setupPlayer()`, `addTrack()`, `playbackService()`
<br><br>
- added `react-native-vector-icons` npm pkg
<br><br>
- in `App.tsx`, call `musicPlayerServices` ; `useState()`, `useEffect()` ; basic setup on rendering part: intro to `<ActivityIndicator />`
<br><br>
- create component => `ControlCenter.tsx` & import `usePlaybackState` hook & `MaterialIcons` ; added fns. `skipToNext()`, `skipToPrevious()`, `togglePlayback()` ; rendering them (currently having issues with `playBackState` type)
<br><br>
- create component `SongInfo.tsx` ; render `track` `title` & `track` `artist` & `track album`
<br><br>
- create component `SongSlider.jsx` ; call hook `useProgress()` from `'react-native-track-player'` with `position` & `duration` ; render `Slider` from `'@react-native-community/slider'` ; js code to show time progressed & time remaining using `Date()`
<br><br>
- added screens => `MusicPlayer.tsx` ; `useTrackPlayerEvents()` ; rendered all components