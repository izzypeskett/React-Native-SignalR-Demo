# React Native and SignalR Demo Chat App

## Purpose

The purpose of this demo is to research and test integration of SignalR into a react-native client

## Demo

The `/Server` code was generated by following the Microsoft SignalR with typescript tutorial - [Follow this link](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr-typescript-webpack?view=aspnetcore-5.0&tabs=visual-studio)

## How to run

```
cd Server
npm install
dotnet run

```

```
cd Client
yarn install
cd ios
pod install
yarn ios
```

### Running on Android

To run on android the emulator will not pick up the `http://localhost:5000/hub` URL, you will need to replace it with `http://{your-ip}:10923/hub`

You will also need to update the `/Server`

```
/Server/Properties/launchSettings.json

"SignalRWebPack": {
    ...
    "applicationUrl": "https://localhost:5001;http://*:10923",
    ...
}
```

To get your local IP address run the following command in your terminal:

```

ipconfig getifaddr en0

```

```
cd Client
yarn android
```