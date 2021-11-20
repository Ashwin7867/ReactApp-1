import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
const Welcome = ({ navigation }) => {
  const width = Dimensions.get("window").width;
  return (
    <ImageBackground
      source={require("./1_FRONT_LOGIN.png")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "90%",
        }}
      >
        {/* <View style={{justifyContent:"center",alignItems:"center" }}>
           <Text style={{ fontSize:50,fontWeight:'bold',color:"white" }}>somadome</Text>
          <Text style={{ fontSize:15,color:"white" }}>Your journey to the Present</Text>
          </View> */}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: width,
            height: 20,
          }}
        >
        </View>

        <View style={{ marginTop: "60%" }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              backgroundColor: "rgb(37, 150, 190)",
              marginTop: "10%",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                textAlign: "center",
                paddingTop: 12,
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              backgroundColor: "rgb(37, 150, 190)",
              marginTop: "3%",
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                textAlign: "center",
                paddingTop: 12,
              }}
            >
              REGISTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch',
  },
});

export default Welcome;
