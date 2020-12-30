import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../assets/constants/colors";
import Dims from "../assets/constants/dims";
import { Fonts, FontSize } from "../assets/constants/fonts";
import Fade from "./Fade";

const PrimaryButton = ({ label, onPress, disabled = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      shadowColor: disabled ? Colors.DEVIDER : Colors.PRIMARY,
      elevation: 10,
    },
    gradient: {
      width: "80%",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: Dims.RADIUS,
    },
    label: {
      color: disabled ? Colors.TEXT_DARK : Colors.WHITE,
      fontFamily: Fonts.Main,
      fontSize: FontSize.Medium,
      marginBottom: Platform.OS === "ios" ? -10 : 0,
    },
  });

  return (
    <Fade style={styles.container} visible={visible} duration={1000}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
          colors={
            disabled
              ? [Colors.WHITE, Colors.TEXT_LIGHT]
              : [Colors.PRIMARY, Colors.SECONDARY]
          }
        >
          <Text style={styles.label}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Fade>
  );
};

export default PrimaryButton;
