import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../assets/colors'
import { CountUp } from 'use-count-up'

const Summary = ( { data }:any ) => {

    return (
    <Fragment>

    <Card 
        title='Cases' 
        today={data?.todayCases} 
        statistic={data?.cases} 
        bottomRightValue={95} 
        bottomRightTitle='Active' 
        color={COLORS.blue}
        data={data}
    />

    <Card 
        title='Deaths' 
        today={data?.todayDeaths} 
        statistic={data?.deaths} 
        bottomRightValue={9523} 
        bottomRightTitle='Death Rate' 
        color={COLORS.red}
        rate={true}
        data={data}
    />

    <Card 
        title='Recovered' 
        today={data?.todayRecovered} 
        statistic={data?.recovered} 
        bottomRightValue={923} 
        bottomRightTitle='Recovery Rate' 
        color={COLORS.yellow}
        rate={true}
        data={data}
    />
    </Fragment>
    )
}

type ICard = {
    title:string;
    statistic:number;
    today:number;
    bottomRightValue:number;
    bottomRightTitle:string;
    color:string;
    rate?:boolean;
    data:any
}
const Card = ({ 
    title,
    today, 
    statistic,
    bottomRightValue,
    bottomRightTitle, 
    color, 
    rate,
    data }:ICard) => {
    const theme = {
        borderLeftColor: color,
        borderRightColor: color,
    }
    let bottomRight
    if(rate) {
        bottomRight = 
        <CountUp isCounting end={((statistic / data?.cases) * 100)} duration={2.9} decimalPlaces={2}/>

    } else {
        bottomRight = <CountUp isCounting end={bottomRightValue} duration={3} thousandsSeparator=','/> 
    }
    return (
    <View style={[styles.summaryWrapper, theme]}>
    <Text style={[styles.title, { backgroundColor:color }]}>{title}</Text>
       <View style={styles.statistics}>
            <Text style={[styles.total, {color:color}]}> 
            <CountUp isCounting end={statistic} duration={2.2} thousandsSeparator=',' />
          </Text>
            <Text style={[styles.todayAdded, {color:color}]}>+
            <CountUp isCounting end={today} duration={2.9} thousandsSeparator=','  /> Today</Text>
       </View>
        <Text style={[styles.bottomRight, { backgroundColor:color}]}> 
        {bottomRight}{rate ? "%" : ''}  {bottomRightTitle}
        </Text>
   </View>
    )
}
const styles = StyleSheet.create({
    summaryWrapper:{
        backgroundColor:COLORS.white,
        marginHorizontal:2,
        height:150,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        overflow:'hidden',
        marginVertical:5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.3,
        elevation: 1,
    },
 
    title:{
        fontSize:22,
        color:COLORS.white,
        position:'absolute',
        top:0,
        left:0,
        zIndex:100,
        paddingHorizontal:20,
        paddingVertical:8,
        borderBottomRightRadius:10,
        fontFamily:'OpenSans_700Bold',

    },
    statistics: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    total:{
        fontSize:28,
        color:COLORS.blue,
        fontFamily:'OpenSans_700Bold'
    },
    todayAdded:{
        fontSize:15,
        color:COLORS.blue,
        fontFamily:'OpenSans_400Regular'
    },
    bottomRight:{
        fontSize:15,
        color:COLORS.white,
        backgroundColor:COLORS.blue,
        position:'absolute',
        fontFamily:'OpenSans_700Bold',
        bottom:0,
        right:0,
        zIndex:100,
        paddingHorizontal:17,
        paddingVertical:8,
        borderTopLeftRadius:10,

    },

})
export default Summary
