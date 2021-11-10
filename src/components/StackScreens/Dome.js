import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Linking,
  PixelRatio,
  Dimensions,
  Image,
} from "react-native";
import { material } from "react-native-typography";
import MapView, { Marker } from "react-native-maps";

var FONT_BACK_LABEL = 20;
var FONT_HEADING = 25;
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 10;
  FONT_HEADING = 15;
}

const FindDome = ({ navigation }) => {
  return (
    // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
    //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Find Dome Screen</Text>
    //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
    //                     onPress={()=>navigation.navigate("Intentions")}>
    //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
    //   </TouchableOpacity>
    // </SafeAreaView>

    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={[material.display1, styles.headingText]}>
          FIND A DOME{" "}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.744516,
            longitude: -73.989325,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 40.744516,
              longitude: -73.989325,
            }}
            tracksViewChanges={false}
            icon={require("../../../assets/somadome.png")}
            description={"DOME"}
          >
            <Image
              source={require("../../../assets/somadome.png")}
              style={{ height: 35, width: 50 }}
            />
          </Marker>
        </MapView>
      </View>

      <View style={styles.addressContainer}>
        <Text style={[material.headlineObject, styles.addressHeadingText]}>
          MODRN SANCTUARY{" "}
        </Text>
        <Text style={[material.subheading, styles.addressText]}>
          {/* {
            "12 W 27th St 9th floor,\n New York ,NT 1000 \n www.modernsanctury.com \n(212) 675-9355"
          } */}
          <View style={{ flex:1 }}>
            <Text style={styles.addressInfoText}>
              12 W 27th St 9th floor,{"\n"}{" "}
            </Text>
            <Text style={styles.addressInfoText}>New York ,NT 1000 {"\n"}</Text>
            <Text style={styles.addressInfoText}>
              www.modernsanctury.com {"\n"}
            </Text>
            <Text style={[styles.addressInfoText,{textAlign:"center"}]}>(212) 675-9355 {"\n"}</Text>
          </View>
        </Text>
      </View>

      <View style={styles.bookingContainer}>
        <Text style={[material.subheading, styles.addressText]}>
          CALL TO BOOK YOUR SESSION{" "}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 180,
            backgroundColor: "#70b1ba",
            marginTop: "10%",
          }}
          onPress={() => Linking.openURL("https://somadome.com/")}
        >
          <Text
            style={{
              fontSize: FONT_BACK_LABEL,
              color: "white",
              textAlign: "center",
              paddingTop: 12,
            }}
          >
            BOOK A SESSION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  heading: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#70b1ba",
  },
  mapContainer: {
    flex: 1.5,
  },
  addressContainer: {
    flex: 1.5,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  bookingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#f9f9f9",
    borderTopWidth: 1,
  },
  headingText: {
    color: "white",
    fontSize: FONT_HEADING,
  },
  addressText: {
    color: "#b8b8bb",
    fontSize: FONT_BACK_LABEL,
  },
  addressHeadingText: { color: "#b8b8bb", fontSize: FONT_HEADING,marginBottom:10 },
  addressInfoText: {
    textAlign:"center",
    color:"#b8b8bb"
  },
  map: {
    width: "100%",
    height: "95%",
  },
});

export default FindDome;
