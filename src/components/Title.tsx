import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { COLORS } from '../../assets/colors';

const Title = ({ philippines }:any) => {
    return (
       <View style={styles.philippinesWrapper}>
        <Text style={styles.philippinesTitle}>Philippines</Text>
        <Text style={styles.philippinesUpdated}>Latest update as of {philippines && new Date(philippines.updated).toDateString()}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    philippinesWrapper:{
      padding: 12,
    },
    philippinesTitle:{
      fontSize:30,
      color:COLORS.primary,
    },
    philippinesUpdated:{
      fontSize:16,
      color:COLORS.primary,
      // fontFamily:'OpenSans_400Regular'
    },
  
  });
  
export default Title
