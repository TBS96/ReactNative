# Project-8: Music Player
- setup env. for `Music Player` app ; added `react-native-track-player` npm pkg ; created folder `assets` having few mp3 files
<br><br>
- created file `constants.ts` from where we are `exporting` an array of objects that contains metadata of audio files ; `import { Track } from 'react-native-track-player'` npm pkg
<br><br>
- create file `playbackServices.js` in `root dir.` & import `TrackPlayer` from `react-native-track-player`,` playListData` from `constants.ts` and create `async` fn `playbackService()` ; in `index.js` import `TrackPlayer` & `playbackService` & register `AppRegistry.registerComponent()` like this: `TrackPlayer.registerPlaybackService(() => playbackService)`
<br><br>
- create `musicPlayerServices.js` & add fns. using `async-await`: `setupPlayer()`, `addTrack()`, `playbackService()`