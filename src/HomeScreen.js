import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import SearchFilter from './components/SearchFilter'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import serviecapi from './consts/Serviecapi'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './consts/color'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Menu from './screens/Menu'



const HomeScreen = ({navigation}) => {
  
  
  const ListServices = () => {

    return ( 
    <View style={style.servicesIcon}>
        <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("ManHairCut")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/haircut.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center',marginLeft: 10, marginTop: 10}}>Salon</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("Spa")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/spa.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' , marginLeft: 10,marginTop: 10}}>Spa</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={style.buttonStyle}
                onPress={() => navigation.navigate("Massage")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/massage.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' , marginLeft: 0, marginTop: 10}}>Massage</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={{alignItems: 'center'}}
                onPress={() => navigation.navigate("AllServices")}>
                <Image 
                style={style.iconStyle}
                     source={require("../assets/all.png")}
                 />
                 <Text style={{fontSize: 15, alignItems:'center' ,textAlign:'center', marginTop: 10 }}>All Services</Text>
           </TouchableOpacity>

           

          
    </View>
    )
  };

  const Card = ({offer}) => {
    return <ImageBackground></ImageBackground>
  };

  return <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
          <StatusBar translucent={false} backgroundColor={COLORS.primary} />
          <View style={style.header}>
          <TouchableOpacity style={{alignItems:'flex-end'}}
          >
          <Image
                     source={require("../assets/menuicon/bell.png")}
                 />
          </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{backgroundColor: COLORS.primary,height: 120, paddingHorizontal: 30,}}>
              <View>
              <Text style={style.headerTitle}>Welcome To</Text>
                  <Text style={{fontStyle:'italic', color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>Urbanservices</Text>
                  <View style={style.inputContainer}>
                    
                    <TextInput placeholder='Search Services' style={{color: COLORS.grey}}/>
                  </View>
              </View>
              </View>
              <ListServices />
              <Text style={style.secionTitle}>Special Package & Offers</Text>
          </ScrollView>
          <View style={style.bottom}>
          <Menu />
          </View>
  </SafeAreaView>
}

const style = StyleSheet.create({
  header:{
    paddingVertical: 20,
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  bottom:{
    paddingVertical: 0,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    paddingTop: 10,
    
    
  },
  headerTitle:{
    color: COLORS.white,
    fontWeight: 'bold',
    fontStyle:'italic',
    fontSize: 30,
  },
  inputContainer:{
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  servicesIcon:{
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  iconStyle:{
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  secionTitle:{
    marginHorizontal:20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeScreen;