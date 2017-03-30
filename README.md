# react-hybrid
A hybrid react web and react native boilerplate code with redux state being shared by both

<h3>STATE</h3>

```
cd state/
yarn && gulp build:watch
```

<h3>WEB</h3>

```
cd web/
yarn global add create-react-app
yarn install && yarn start
```

<h3>NATIVE</h3>

```
cd mobile/
yarn global add react-native-cli

# in bashrc file add the following lines
export ANDROID_HOME=${HOME}/Android/Sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools

yarn && react-native run-android && yarn start
```
