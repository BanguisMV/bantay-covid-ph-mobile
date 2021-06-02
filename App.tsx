import React, { useEffect, useState,Fragment } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView,RefreshControl ,ActivityIndicator} from 'react-native';
import Header from './src/components/Header'
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './assets/colors'
import Title from './src/components/Title';
import Summary from './src/components/Summary';
import HistoryChart from './src/components/HistoryChart';
import Statistics from './src/components/Statistics';
import { Text } from 'react-native-svg';


export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [philippines, setPhilippines] = useState<any>();
  const [all, setAll] = useState<any>();

  const [refreshing, setRefreshing] = React.useState(false);

  
const wait = (timeout:number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true)
    fetch('https://disease.sh/v3/covid-19/countries/philippines')
    .then((response) => response.json())
    .then((json) => setPhilippines(json))
    .catch((error) => console.error(error))
    .finally(() => {
      setLoading(false)
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true)
      fetch('https://disease.sh/v3/covid-19/countries/philippines')
      .then((response) => response.json())
      .then((json) => setPhilippines(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
    .then((json) => setAll(json))
    .catch((error) => console.error(error))
  }, []);


      return (
        <View style={styles.container}>
          <StatusBar animated={true} backgroundColor="white" />
            <ScrollView contentInsetAdjustmentBehavior='automatic'  showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[COLORS.primary]}
              />}>
            <View style={styles.body}>
               <SafeAreaView> 
                  <Header /> 
                </SafeAreaView>
            
            {isLoading ?  
            <View style={styles.spinner}>
              <ActivityIndicator size="large" color={COLORS.primary} /> 
            </View>
            : 
              <Fragment>
                <Title philippines={philippines} />
                <Summary data={philippines} isLoading={isLoading}/>
                <HistoryChart />
                <Statistics philippines={philippines} all={all} /> 
              </Fragment>}
             


            </View>
            </ScrollView>
        </View>
      );
    }


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG,
  },
  body: {
    paddingTop:30,
    flex:1
  },
  spinner: {
    flex:1,
    height:'100%',
    paddingVertical:'80%'
  }

});
