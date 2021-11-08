import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { material } from "react-native-typography";
import { GetFontSize } from "../../Utills/commonUtills";
import MoreCommon from "../Common/MoreCommon";
const moreTitles = [
  //contains Title in first index and navigate screen name in second index
  ["PROFILE", "PROFILE"],
  // ["SOMADOME BOOKING", "Book"],
  // ["SUBSCRIPTION & PAYMENT", "Pay"],
  // ["PERFORMANCE", "DomePerformance"],
  ["DOME PAIR", "PAIRDOME"],
  ["HELP & SUPPORT", "HELP"],
  ["TERMS & CONDITIONS", "TermsServices"],
  ["LOGOUT", "Login"],
];

export default function More({ navigation }) {
  console.log(navigation);
  const NavigateHandler = (title) => {
    navigation.navigate(title);
  };
  return (
    <SafeAreaView style={style.contianer}>
      <View style={style.heading}>
        <Text style={[material.headlineWhite, style.headingText]}>More</Text>
      </View>
      <View style={style.mainContent}>
        {moreTitles.map((val, index) => {
          return (
            <MoreCommon
              key={index}
              heading={val}
              NavigateHandler={NavigateHandler}
            />
          );
        })}

        {/* <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} />
        <MoreCommon heading={moreTitles[0]} /> */}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  contianer: { flex: 1 },
  heading: {
    flex: 0.2,
    backgroundColor: "#b8b8bb",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    marginLeft: 30,
    marginRight: 90,
    marginTop: 20,
  },
  headingText: {
    fontSize: GetFontSize(),
  },
});
