import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View ,StyleSheet} from 'react-native';
import { material} from 'react-native-typography';
import MapView from 'react-native-maps';

const FindDome = ({ navigation }) => {
    return(
        // <SafeAreaView style={{ justifyContent:'center',alignItems:'center' ,flex:1}}>
        //   <Text style={{ fontSize:30,fontWeight:'bold' }}>Find Dome Screen</Text>
        //   <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
        //                     onPress={()=>navigation.navigate("Intentions")}>
        //        <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
        //   </TouchableOpacity>
        // </SafeAreaView>

        <SafeAreaView style={styles.container}>

          <View style={styles.heading}>
            <Text style={[material.display1,styles.headingText]}>FIND A DOME </Text>
          </View>

          <View style={styles.mapContainer}>
          <MapView
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

            
          </View>

          <View style={styles.addressContainer}>
          <Text style={[material.headline,styles.addressText]}>MODRN SANCTUARY </Text>
          <Text style={[material.subheading,styles.addressText]}>{"12 W 27th St 9th floor,\n New York ,NT 1000 \n www.modernsanctury.com \n(212) 675-9355"}
          
           </Text>


            
          </View>

          <View style={styles.bookingContainer}>
          <Text style={[material.subheading,styles.addressText]}>CALL TO BOOK YOUR SESSION </Text>
          <TouchableOpacity style={{ height:50,width:180,backgroundColor:'rgb(37, 150, 190)',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Login")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>BOOK A SESSION</Text>
          </TouchableOpacity>  



            
          </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
  },
  heading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgb(37, 150, 190)",
   
  },
  mapContainer:{
    flex:2,
  },
  addressContainer:{
    flex:1,
    alignItems:"center",
    marginLeft:50,
    marginRight:50,
    
  }
  ,bookingContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  headingText:{
    color:"white"
  },
  addressText:{
    color:"grey",
   
  }


})


export default FindDome;