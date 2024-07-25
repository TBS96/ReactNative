- ## Initialize Project
``` bash
npx react-native@latest init ReactNativeApp01
```

- ## Create `local.properties` under android folder & create sdk directory
- For Windows
``` bash
sdk.dir=C:\\Users\\prant\\AppData\\Local\\Android\\Sdk
```
- For Linux
``` bash
sdk.dir=/home/prantikg96/Android/Sdk
```

- ## Open `.gitIgnore` and paste it
``` bash
android/local.properties
```

- ## Run on device or emulator
``` bash
npx react-native run-android
```