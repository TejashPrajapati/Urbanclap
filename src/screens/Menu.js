import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import COLORS from '../consts/color';


const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}> 
           <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => navigation.navigate("HomeScreen")}>
                <Image 
                style={styles.iconStyle}
                     source={require("../../assets/menuicon/house.png")}
                 />
                 <Text style={{color:COLORS.white, fontSize: 15, textAlign: 'center', marginTop: 10 ,fontWeight: 'bold'}}>Home</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => navigation.navigate("BookingScreen")}>
                 <Image 
                style={styles.iconStyle}
                     source={require("../../assets/menuicon/Booking.png")}
                 />
                 <Text style={{color:COLORS.white, fontSize: 15, textAlign: 'center', marginTop: 10 ,fontWeight: 'bold',}}>Booking</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => navigation.navigate("WishlistScreen")}>
                 <Image 
                style={styles.iconStyle}
                     source={require("../../assets/menuicon/wishlist.png")}
                 />
                 <Text style={{color:COLORS.white, fontSize: 15, textAlign: 'center', marginTop: 10,fontWeight: 'bold'}}>Wishlist</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => navigation.navigate("ProfileScreen")}>
                 <Image 
                style={styles.iconStyle}
                     source={require("../../assets/menuicon/user.png")}
                 />
                 <Text style={{color:COLORS.white, fontSize: 15, textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}>Profile</Text>
           </TouchableOpacity>
        </View>
    );
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        padding: 15,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    textStyle:{
        textTransform: "uppercase",
        marginBottom: 50,
    },
    iconStyle:{
        width: "100%",
        height: 40,
        aspectRatio: 1,
    },
    buttonStyle: {
        alignItems: 'center'
    }
});