import React from "react";
import StepIndicator from "react-native-step-indicator";
import { View } from "react-native";
import Colors from "../assets/constants/colors";

const Steps = ({ onPress, position, tabNum }) => {
  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={styles.steps}
        stepCount={tabNum}
        currentPosition={position}
        // onPress={(newPosition) => onPress(newPosition)} //Uncomment to let user choose question page
      />
    </View>
  );
};

const styles = {
  container: {
    width: "100%",
  },
  steps: {
    stepIndicatorSize: 15,
    currentStepIndicatorSize: 30,
    currentStepStrokeWidth: 8,
    currentStepIndicatorLabelFontSize: 13,
    currentStepLabelColor: Colors.PRIMARY,
    separatorFinishedColor: Colors.PRIMARY_DARK,
    stepIndicatorLabelCurrentColor: Colors.WHITE,
    stepStrokeCurrentColor: Colors.PRIMARY,
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: Colors.TRANSPARENT,
    stepStrokeUnFinishedColor: Colors.PRIMARY,
    separatorStrokeWidth: 1,
    stepIndicatorLabelFontSize: 1,

    separatorUnFinishedColor: Colors.DEVIDER,
    stepIndicatorFinishedColor: Colors.PRIMARY,
    stepIndicatorUnFinishedColor: Colors.WHITE,
    stepIndicatorCurrentColor: Colors.WHITE,
    labelColor: Colors.TRANSPARENT,
    labelSize: 1,
  },
};

export default Steps;
