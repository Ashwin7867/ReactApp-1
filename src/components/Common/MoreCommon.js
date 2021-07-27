import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function MoreCommon({ heading, NavigateHandler }) {
  return (
  
      <TouchableOpacity style={style.container} onPress={()=>NavigateHandler(heading[1])}>
        <View style={style.text}>
          <Text>{heading[0]}</Text>
        </View>
        <View style={style.image}>
          <Image
            style={style.arrowImage}
            source={require("../../../assets/images/more/back.png")}
          ></Image>
        </View>
      </TouchableOpacity>
  
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  text: {
    padding: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginTop: 20,
  },
  arrowImage: {
    width: 20,
    height: 20,
  },
});
