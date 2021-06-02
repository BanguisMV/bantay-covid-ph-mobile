import React, {useEffect, useState} from 'react'
import { Text, View,Dimensions, StyleSheet ,ScrollView } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { COLORS } from '../../assets/colors';
const HistoryChart = () => {

  const [cases, setCases] = useState<any>();
  const [casesDate, setCasesDate] = useState<any>();
  const [deaths, setDeaths] = useState<any>();
  const [recovered, setRecovered] = useState<any>();
  const [isLoading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true)
    fetch('https://disease.sh/v3/covid-19/historical/philippines')
    .then((response) => response.json())
    .then((json) => {
        setCases(json.timeline.cases)
        setDeaths(json.timeline.deaths)
        setRecovered(json.timeline.recovered)
        })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));

  }, []);

const labels =  [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July",
  "August", 
  "September", 
  "October", 
  "November", 
  "December", 
]
    return (
        <View style={styles.chartWrapper}>
          <Text style={styles.statisticalHistory}>
            Statistical History
          </Text>
          <ScrollView 
            horizontal={true} 
            contentInsetAdjustmentBehavior='automatic'
             showsVerticalScrollIndicator={false}>
 
            <LineChart
              data={{
                labels,
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width + 400} // from react-native
              height={230}
              yAxisLabel=""
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 12
              }}
            />
                         
                                 
              </ScrollView>

          <ScrollView 
            horizontal={true} 
            contentInsetAdjustmentBehavior='automatic'
             showsVerticalScrollIndicator={false}>
 
            <LineChart
              data={{
                labels,
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width + 400} // from react-native
              height={230}
              yAxisLabel=""
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: COLORS.primary,
                backgroundGradientTo: COLORS.primaryLight,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 12
              }}
            />
                  
          </ScrollView>

          <ScrollView 
            horizontal={true} 
            contentInsetAdjustmentBehavior='automatic'
             showsVerticalScrollIndicator={false}>
 
            <LineChart
              data={{
                labels,
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width + 400} // from react-native
              height={230}
              yAxisLabel=""
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.yellow,
                backgroundGradientFrom: '#097918',
                backgroundGradientTo: "#00ff5e",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 8
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 12
              }}
            />
                   
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  chartWrapper: {
    paddingHorizontal:8,
    marginTop:18
  },
  statisticalHistory:{
    fontSize:22,
    textAlign:'center',
    fontWeight:'bold',
    marginVertical:12,
    // fontFamily:"OpenSans_800ExtraBold",
    color:'#7579e7'
  }
});

export default HistoryChart
