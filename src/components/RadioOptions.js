import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../assets/constants/colors";
import { Fonts, FontSize } from "../assets/constants/fonts";

const RadioOptions = ({ onPress, selected = "", options = [] }) => {
  return (
    <View style={styles.container}>
      {options.map((item, index) => {
        return (
          <View key={index.toString()} style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onPress(item, index);
              }}
              style={[
                styles.radio,
                {
                  backgroundColor:
                    item === selected ? Colors.PRIMARY : Colors.TRANSPARENT,
                },
              ]}
            />
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: "10%",
  },
  radio: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderStyle: "solid",
    borderColor: Colors.PRIMARY,
    borderWidth: 7.5,
  },
  text: {
    color: Colors.TEXT_DARK,
    paddingHorizontal: 20,
    fontSize: FontSize.Small,
    fontFamily: Fonts.Main,
    marginBottom: -10,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
  },
});

export default RadioOptions;
