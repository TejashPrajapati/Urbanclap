import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const BookingScreen = () => {


  return (
    <View>
    <View>

      
    </View>
    <Text style={styles.mainHeader}>
    BookingScreen</Text>
          
            </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 35,
  textAlign: "center",
 
  },
  description:{
    textAlign: "left",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
})