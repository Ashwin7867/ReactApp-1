import React from "react";
<TouchableOpacity>
  <Image source={require("../../../assets/images/play.png")}></Image>
</TouchableOpacity>;
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Musicgrid({ navigation, text, imagePath, iconName }) {
  const images = {
    creative: require("../../../assets/images/creative.png"),
    relaxed: require("../../../assets/images/relaxed-1.png"),
    focused: require("../../../assets/images/FOCUSED-1.png"),
    energized: require("../../../assets/images/energized-1.png"),
    recovered: require("../../../assets/images/RECOVERED-1.png"),
  };

  const icons = {
    mind: require("../../../assets/images/MIND.png"),
    spirit: require("../../../assets/images/Dove.png"),
    body: require("../../../assets/images/BODY.png"),
  };

  let innerText = "";

  if (text) {
    innerText = text.toUpperCase();
  }

  return (
    <ImageBackground source={images[imagePath]} style={style.backgroundImage}>
      <View style={style.container}>
        <View style={style.box}>
          <TouchableOpacity onPress={() => navigation.navigate("Music")}>
            <Image
              style={style.IconImage}
              source={require("../../../assets/images/play.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={style.box1}>
          <Text style={style.text}>{innerText} </Text>
        </View>
        <View style={style.box2}>
          <TouchableOpacity
            style={{ backgroundColor: "rgba(52, 52, 52, 0.0)" }}
            onPress={() =>
              navigation.navigate("Clarity", { navigation: navigation })
            }
          >
            <Image style={style.IconImage} source={icons[iconName]}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:"rgba(185,78,161,255)"
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    letterSpacing: 1,
  },
  backgroundImage: {
    flex: 2,
    resizeMode: "cover", // or 'stretch'
    height: 80,
  },
  IconImage: {
    flex: 1,
    width: 40,
    height: "100%",
    resizeMode: "contain",
  },
});
