import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DotIndicator } from "react-native-indicators";
import PrimaryButton from "../components/PrimaryButton";
import { Fonts, FontSize } from "../assets/constants/fonts";
import Colors from "../assets/constants/colors";
import { Actions } from "react-native-router-flux";
import Fade from "../components/Fade";
import gComm from "../helpers/communicationHelper";

const URL = "http://goudarzi.ws/teamway/";

const Splash = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const FADE_TIME = 1000;

  useEffect(() => {
    setLoading(true);

    gComm.getRequest(URL, null).then((resp) => {
      resp.json().then((json) => {
        if (json.status === 200) {
          setData(json.questions);
          setLoading(false);

          setTimeout(() => {
            setLoaded(true);
          }, FADE_TIME);
        }
      });
    });
  }, []);

  const btn = loaded ? (
    <PrimaryButton
      label={"Start Personality Test"}
      onPress={() => Actions.questions({ data })}
    />
  ) : (
    <Fade style={styles.indicator} visible={loading} duration={FADE_TIME}>
      <View style={styles.indicator}>
        <DotIndicator color={Colors.PRIMARY} />
      </View>
    </Fade>
  );

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode={"contain"}
            style={styles.logoImage}
            source={require("../assets/images/logo.png")}
          />
          <Text numberOfLines={1} style={styles.logoText}>
            assessment
          </Text>
        </View>
        {btn}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "10%",
  },
  logoImage: {
    width: "45%",
    height: 100,
    right: 0,
  },
  logoText: {
    fontFamily: Fonts.Bold,
    fontSize: FontSize.Medium,
    marginBottom: Platform.OS === "ios" ? -10 : 0,
    paddingHorizontal: 10,
    width: "50%",
    textAlign: "left",
  },
  indicator: {
    height: 60,
    width: "100%",
  },
});

export default Splash;
