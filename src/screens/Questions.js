import React, { useEffect, useState } from "react";
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
import Steps from "../components/Steps";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../assets/constants/colors";
import RadioOptions from "../components/RadioOptions";
import { Actions } from "react-native-router-flux";
import Fade from "../components/Fade";

const randGenerator = (min, max) =>
  Math.floor(Math.random() * Math.floor(max - min)) + min;

const questionsListGenerator = (data) => {
  let fullQuestionsList = [...data];
  let selectedQuestionsList = [];

  const numberOfQuestion = randGenerator(3, 5);
  for (let i = 0; i <= numberOfQuestion; i++) {
    const selectedQuestionIndex = randGenerator(0, fullQuestionsList.length);
    selectedQuestionsList.push(fullQuestionsList[selectedQuestionIndex]);
    fullQuestionsList.splice(selectedQuestionIndex, 1);
  }
  return selectedQuestionsList;
};

const Questions = ({ navigation }) => {
  const { data } = navigation.state.params;
  const [curPage, setCurPage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [questions, setQuestions] = useState([
    { questions: "", answer: "", options: [] },
  ]);
  useEffect(() => {
    setQuestions(questionsListGenerator(data));
    setLoaded(true);
  }, []);

  const handleAnswer = () => {
    if (questions[curPage].answer !== "" && curPage < questions.length - 1) {
      setCurPage(curPage < questions.length ? curPage + 1 : questions.length);
    } else if (
      questions[curPage].answer !== "" &&
      curPage === questions.length - 1
    ) {
      Actions.result({ questions });
    }
  };

  const handleButtonLbl =
    questions[curPage].answer !== ""
      ? curPage < questions.length - 1
        ? "Next"
        : "Done! See the Result"
      : "Choose one answer";

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
        </View>
        <ScrollView style={styles.contents}>
          <Fade style={styles.content} visible={loaded} duration={1000}>
            <Steps
              tabNum={questions.length}
              position={curPage}
              onPress={(position) => {
                setCurPage(position);
              }}
            />
            <Text style={styles.questionText}>
              {questions[curPage].question}
            </Text>
            <RadioOptions
              onPress={(answer, index) => {
                let newQs = [...questions];
                newQs[curPage] = {
                  ...newQs[curPage],
                  answer,
                  score: index + 1, //1 more introvert & 4 more extrovert
                };
                setQuestions(newQs);
              }}
              options={questions[curPage].options}
              selected={questions[curPage].answer}
            />
          </Fade>
        </ScrollView>

        <PrimaryButton
          onPress={handleAnswer}
          disabled={questions[curPage].answer === ""}
          label={handleButtonLbl}
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
  contents: { flex: 1, width: "100%" },
  logoContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "10%",
  },
  questionText: {
    textAlign: "left",
    fontFamily: Fonts.Main,
    fontSize: FontSize.Small,
    color: Colors.TEXT_DARK,
    paddingHorizontal: "10%",
    paddingVertical: 30,
  },
  logoImage: {
    width: "45%",
    height: 100,
    right: 0,
  },
});

export default Questions;
