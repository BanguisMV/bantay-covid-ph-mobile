import React from 'react'
import { Animated, View, StyleSheet, TouchableOpacity,Image,Linking, Easing,Text } from 'react-native'

const Header = () => {

    
  const spinValue = new Animated.Value(0);
  Animated.loop(
  Animated.timing(
  spinValue, {
    toValue: 1,
    duration: 10000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true  // To make use of native driver for performance
  }
)).start()

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

    return (
        <View  style={styles.header}>
            <View style={styles.logoWrapper}>
                <Animated.Image source={{ uri: "https://covid.banguismv.wtf/no-virus.png" }} style={[styles.flag, {transform: [{rotate: spin}] } ]}/>
                <Text style={styles.pageTitle}> Bantay {"\n"} COVID </Text>
            </View>
        
          <View style={styles.socialMedia}>

            <TouchableOpacity onPress={() => Linking.openURL('https://disease.sh/docs/#/')}>
              <Image source={{ uri: "https://covid.banguismv.wtf/disease.png" }}    style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/marknaughty/')}>
              <Image source={{ uri: "https://covid.banguismv.wtf/instagram.png" }}  style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/Pyakzme/')}>
              <Image source={{ uri: "https://covid.banguismv.wtf/fb.png" }}         style={styles.socialIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/BanguisMV')}>
              <Image source={{ uri: "https://covid.banguismv.wtf/Github.png" }}     style={styles.socialIcon} />
            </TouchableOpacity>

          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor: 'white',
      padding: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
    },
    logoWrapper: {
        flexDirection:'row',
        alignItems:'center'
    },
    pageTitle: {
        fontSize:15,
        // fontFamily:"OpenSans_800ExtraBold",
        color:'#7579e7'
    },
    flag: {
      height:40,
      width:40,
      marginRight: 13
    },
    socialMedia :{
      flexDirection:'row',
      alignItems:'center'
    },
    socialIcon:{
      height:25,
      width:25,
      marginLeft:15
    },
  });
  
export default Header
