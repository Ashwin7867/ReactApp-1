import React from 'react'
import { View, Text ,StyleSheet,ImageBackground,Image} from 'react-native'

export default function Musicgrid({text,imagePath}) {


    const images = {
        creative: require('../../../assets/images/creative.png'),
        relaxed: require('../../../assets/images/relaxed-1.png'),
        focused: require('../../../assets/images/FOCUSED-1.png'),
        energized: require('../../../assets/images/energized-1.png'),
        recovered: require('../../../assets/images/RECOVERED-1.png'),
    };

    let innerText = "";

    if(text){
         innerText = text.toUpperCase();
    }
   

    return (
        <ImageBackground source={images[imagePath]} style={style.backgroundImage}>
             <View style={style.container}>
            <View style={style.box}>
                <Image source={require("../../../assets/images/play.png")}></Image>
            </View>
           
            <View style={style.box1}>
                <Text style={style.text}>{innerText} </Text>
            </View>
            <View style={style.box2}>
            <Image source={require("../../../assets/images/somadomewhite.png")}></Image>
                    </View>
            </View>
        </ImageBackground> 
       
    )
}

const style = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:"row",
        // backgroundColor:"rgba(185,78,161,255)"
        
    },
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    box2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"white"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      }

})
