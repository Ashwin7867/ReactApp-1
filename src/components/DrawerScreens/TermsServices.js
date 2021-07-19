import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CommonHeadingText from "../Common/CommonHeadingText";
import { material } from "react-native-typography";


const termString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function TermsServices() {
  return (
    <View style={style.container}>
        <View><Text style={[material.headline,{marginTop:30}]}>TERM OF SERVICES</Text></View>
      <CommonHeadingText
        headingText=""
        SubheadingText={termString}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: { flex: 1 ,justifyContent:"center",alignItems:"center",marginLeft:30,marginRight:30},
});
