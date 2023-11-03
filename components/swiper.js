"use strict";

import React, { useState } from "react";
import { Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const Swiper = () => {
  const [state, setState] = useState({
    myText: "I'm ready to get swiped!",
    gestureName: "none",
    backgroundColor: "#fff",
  });

  function onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        setState({ backgroundColor: "red", myText: "You swiped up!" });
        break;
      case SWIPE_DOWN:
        setState({ backgroundColor: "green", myText: "You swiped down!" });
        break;
      case SWIPE_LEFT:
        setState({ backgroundColor: "blue", myText: "You swiped left!" });
        break;
      case SWIPE_RIGHT:
        setState({ backgroundColor: "yellow", myText: "You swiped right!" });
        break;
    }
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      config={config}
      style={{
        flex: 1,
        backgroundColor: state.backgroundColor,
      }}
    >
      <Text>{state.myText}</Text>
      <Text>onSwipe callback received gesture: {state.gestureName}</Text>
    </GestureRecognizer>
  );
};

export default Swiper;
