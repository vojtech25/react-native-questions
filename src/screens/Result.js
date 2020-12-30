import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fonts, FontSize } from "../assets/constants/fonts";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../assets/constants/colors";
import score from "../helpers/scoreHelper";
import { Actions } from "react-native-router-flux";

const Result = ({ navigation }) => {
  const { questions } = navigation.state.params;

  const scoreObject = score(questions);
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.backgroundImage}
          resizeMode={"contain"}
          source={require("../assets/images/bg.png")}
        />
        <View style={styles.logoContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.logoImage}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <ScrollView style={styles.contents}>
          <View style={styles.resultTitleRow}>
            <Text
              style={[styles.resultTitleText, { fontFamily: Fonts.UltraLight }]}
            >
              You are more of a
            </Text>
            <Text
              style={[
                styles.resultTitleText,
                { fontFamily: Fonts.Bold, fontSize: FontSize.XLarge },
              ]}
            >
              {scoreObject.label}
            </Text>
          </View>
          <Text style={styles.resultDesc}>{scoreObject.description}</Text>
        </ScrollView>
        <PrimaryButton
          label={"Start Again"}
          onPress={() => Actions.reset("splash")}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    paddingBottom: Platform.OS === "ios" ? 10 : 25,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  contents: { flex: 1, width: "100%", marginBottom: 30 },
  logoContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "10%",
  },
  resultTitleText: {
    color: Colors.TEXT_DARK,
    fontSize: FontSize.Medium,
  },
  resultTitleRow: {
    paddingHorizontal: "10%",
    marginBottom: 10,
  },
  resultDesc: {
    textAlign: "left",
    fontFamily: Fonts.Main,
    fontSize: FontSize.Small,
    color: Colors.TEXT_DARK,
    paddingHorizontal: "10%",
  },
  logoImage: {
    width: "45%",
    height: 100,
    right: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

export default Result;
