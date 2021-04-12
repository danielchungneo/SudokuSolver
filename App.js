import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./routes/HomeStack";

const getFonts = () => {
  return Font.loadAsync({
    "plex-regular": require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    "plex-bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator headerMode="none" />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
