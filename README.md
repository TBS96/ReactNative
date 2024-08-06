## Setup Env. variables in Env. settings(For Windows)
- ### Variable:
``` bash
ANDROID_HOME
```
- ### Value:
``` bash
C:\Users\prant\AppData\Local\Android\Sdk
```

## Setup Env. variables in Env. settings(For Linux)
- Open `.bashrc` file in text editor, present in home dir. & paste the following(change the username) and save it:
``` bash
export ANDROID_HOME=/home/prantikg96/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
- Open a terminal there & write the following to source it:
``` bash 
source ~/.bashrc
```

- Verify the environment variables:
``` bash
echo $ANDROID_HOME
echo $PATH
```

- ## Initialize Project
``` bash
npx react-native@latest init ReactNativeApp01
```

- ## Create `local.properties` under android folder & create sdk directory
- ### `For Windows`
``` bash
sdk.dir=C:\\Users\\prant\\AppData\\Local\\Android\\Sdk
```
- ### `For Linux`
``` bash
sdk.dir=/home/prantikg96/Android/Sdk
```

- ## Open `.gitIgnore` and paste it
``` bash
android/local.properties
```

- ## Run on device or emulator (`For Windows`)
``` bash
npx react-native run-android
```

- ## Run on device or emulator (`For Linux`)
``` bash
npx react-native run-android && npx react-native start
```