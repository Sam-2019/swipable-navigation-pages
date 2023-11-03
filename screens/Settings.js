import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const Settings = ({ navigation }) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 15,
  };

  function onSwipe(gestureName) {
    if (Platform.OS === "ios") {
      const { SWIPE_RIGHT } = swipeDirections;

      switch (gestureName) {
        case SWIPE_RIGHT:
          navigation.navigate("Home");
          break;
        default:
          null;
      }
    }
  }

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction)}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
        <View>
          <Text>Settings</Text>
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

export default Settings;
