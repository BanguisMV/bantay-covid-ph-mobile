import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../assets/colors';
const formatNumber= (num: number) => num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

const Statistics = ({philippines, all}:any) => {
    return (
        <View style={styles.statWrapper}>
            <View style={styles.statChild}>
                <Text style={styles.philippinesTitle}>Philippines</Text>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Population </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.population : 0)} </Text>
                </View>

                 <View style={styles.flex}>
                    <Text style={styles.flexItem}> Tested </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.tests : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Active </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.active : 0)} </Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Critical </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.critical : 0)} </Text>
                </View>
                
                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Infected </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.cases : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Deaths </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.deaths : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Recovered </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(philippines ? philippines.recovered : 0)} </Text>
                </View>

            </View>


            <View style={styles.statChild}>
                <Text style={styles.philippinesTitle}>World</Text>
                
                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Population </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.population : 0)} </Text>
                </View>

                 <View style={styles.flex}>
                    <Text style={styles.flexItem}> Tested </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.tests : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Active </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.active : 0)} </Text>
                </View>
                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Critical </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.critical : 0)} </Text>
                </View>
                
                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Infected </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.cases : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Deaths </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.deaths : 0)} </Text>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.flexItem}> Total Recovered </Text>
                    <Text style={styles.flexItemNumber}> {formatNumber(all ? all.recovered : 0)} </Text>
                </View>
            </View>

            <Text style={[styles.flexItemNumber, { textAlign:'center', marginVertical:12}]}> &copy; Mark Vergel B. Banguis </Text>

        </View>
    )
}



const styles = StyleSheet.create({
    statWrapper: {
        margin:10,
    },
    philippinesTitle:{
        fontSize:20,
        color:COLORS.primary,
        textAlign:'center',
     
    },
    statChild:{
        backgroundColor:COLORS.white,
        padding:12,
        marginVertical:20,
        paddingVertical:25,
        shadowColor: "#000",
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.3,
        elevation: 1,
    },
    flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12
    },
    flexItem:{
        color:COLORS.primaryLight,
        fontSize:18
    },
    flexItemNumber:{
        color:COLORS.primary,
        fontSize:18
    }
  });
  
export default Statistics
