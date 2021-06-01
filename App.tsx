import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import Header from './src/components/Header'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';
import { COLORS } from './assets/colors'
import Title from './src/components/Title';
import Summary from './src/components/Summary';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [philippines, setPhilippines] = useState<any>();

  const fontsLoaded = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://disease.sh/v3/covid-19/countries/philippines')
    .then((response) => response.json())
    .then((json) => setPhilippines(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);


  return (
    <View style={styles.container}>

      <StatusBar animated={true} backgroundColor="white" />
      <ScrollView  contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
           <SafeAreaView> 
              <Header /> 
            </SafeAreaView>
          <Title philippines={philippines}/>
          <Summary data={philippines}/>
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
    width:'100%',
    flex:1
  },

});
