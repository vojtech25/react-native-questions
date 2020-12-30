import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const Fade = ({ style = {}, children, duration, visible = true }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible === false ? 0 : 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  });

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
};

export default Fade;
