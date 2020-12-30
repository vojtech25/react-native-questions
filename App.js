import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Splash from "./src/screens/Splash";
import Questions from "./src/screens/Questions";
import Result from "./src/screens/Result";

const App = () => {
  return (
    <Router>
      <Scene hideNavBar key="root">
        <Scene key="splash" component={Splash} />
        <Scene key="questions" component={Questions} />
        <Scene key="result" component={Result} />
      </Scene>
    </Router>
  );
};

export default App;
