import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Musicgrid({
  navigation,
  text,
  imagePath,
  iconName,
  textColor,
}) {
  const images = {
    creative: require("../../../assets/images/use/play_button_violet.png"),
    relaxed: require("../../../assets/images/use/play_button_light_blue.png"),
    focused: require("../../../assets/images/use/play_button_dark_blue.png"),
    energized: require("../../../assets/images/use/play_button_dark_blue.png"),
    recovered: require("../../../assets/images/use/play_button_green.png"),
  };
  const images2 = {
    creative: require("../../../assets/images/use/play_button_violet.png"),
    relaxed: require("../../../assets/images/use/play_button_light_blue.png"),
    focused: require("../../../assets/images/use/play_button_dark_blue.png"),
    energized: require("../../../assets/images/use/play_button_dark_blue.png"),
    recovered: require("../../../assets/images/use/play_button_green.png"),
  };

  const MUSIC_TYPE_MIND = {
    creative: require("../../../assets/images/use/mind_icon_violet.png"),
    relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
    body: require("../../../assets/images/use/mind_icon_green.png"),
    focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/mind_icon_green.png"),
  };
  const MUSIC_TYPE_BODY = {
    creative: require("../../../assets/images/use/body_icon_violet.png"),
    relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
    body: require("../../../assets/images/use/body_icon_green.png"),
    focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/body_icon_green.png"),
  };
  const MUSIC_TYPE_SPIRIT = {
    creative: require("../../../assets/images/use/spirit_icon_violet.png"),
    relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
    body: require("../../../assets/images/use/spirit_icon_green.png"),
    focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
    energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
    recovered: require("../../../assets/images/use/spirit_icon_green.png"),
  };

  // const icons = {
  //   mind: require("../../../assets/images/MIND.png"),
  //   spirit: require("../../../assets/images/Dove.png"),
  //   body: require("../../../assets/images/BODY.png"),
  //   mindActive: require("../../../assets/images/MIND.png"),
  //   spiritActive: require("../../../assets/images/Dove.png"),
  //   bodyActive: require("../../../assets/images/BODY.png"),
  // };

  const icons = {
    mind: {
      creative: require("../../../assets/images/use/mind_icon_violet.png"),
      relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
      body: require("../../../assets/images/use/mind_icon_green.png"),
      focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/mind_icon_green.png"),
    },
    spirit: {
      creative: require("../../../assets/images/use/spirit_icon_violet.png"),
      relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
      body: require("../../../assets/images/use/spirit_icon_green.png"),
      focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/spirit_icon_green.png"),
    },
    body: {
      creative: require("../../../assets/images/use/body_icon_violet.png"),
      relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
      body: require("../../../assets/images/use/body_icon_green.png"),
      focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/body_icon_green.png"),
    },
    mindActive: {
      creative: require("../../../assets/images/use/mind_icon_violet.png"),
      relaxed: require("../../../assets/images/use/mind_icon_light_blue.png"),
      body: require("../../../assets/images/use/mind_icon_green.png"),
      focused: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/mind_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/mind_icon_green.png"),
    },
    spiritActive: {
      creative: require("../../../assets/images/use/spirit_icon_violet.png"),
      relaxed: require("../../../assets/images/use/spirit_icon_light_blue.png"),
      body: require("../../../assets/images/use/spirit_icon_green.png"),
      focused: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/spirit_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/spirit_icon_green.png"),
    },
    bodyActive: {
      creative: require("../../../assets/images/use/body_icon_violet.png"),
      relaxed: require("../../../assets/images/use/body_icon_light_blue.png"),
      body: require("../../../assets/images/use/body_icon_green.png"),
      focused: require("../../../assets/images/use/body_icon_dark_blue.png"),
      energized: require("../../../assets/images/use/body_icon_dark_blue.png"),
      recovered: require("../../../assets/images/use/body_icon_green.png"),
    },
  };

  let innerText = "";
  if (text) {
    innerText = text.toUpperCase();
  }

  console.log("icon name is ", iconName, " image path is ,", imagePath);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Clarity", {
          navigation: navigation,
          title: innerText,
        })
      }
    >
      <ImageBackground style={style.backgroundImage}>
        <View style={style.container}>
          <View style={style.box}>
            <TouchableOpacity onPress={() => navigation.navigate("Music")}>
              <Image style={style.IconImage} source={images[imagePath]}></Image>
            </TouchableOpacity>
          </View>
          <View style={style.box1}>
            <Text style={[style.text, { color: textColor }]}>{innerText} </Text>
          </View>
          <View style={style.box2}>
            <TouchableOpacity
              style={{ backgroundColor: "rgba(52, 52, 52, 0.0)" }}
              onPress={() =>
                navigation.navigate("Clarity", {
                  navigation: navigation,
                  title: innerText,
                })
              }
            >
              <Image
                style={style.IconImage}
                source={icons[iconName][imagePath]}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    
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
    letterSpacing: 1,
  },
  backgroundImage: {
    flex: 2,
    resizeMode: "cover", // or 'stretch'
    height: 80,
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
 
  },
  IconImage: {
    flex: 1,
    width: 40,
    height: "100%",
    resizeMode: "contain",
  },
});
