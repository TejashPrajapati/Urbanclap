import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import HomeScreen from './src/HomeScreen';
import Details from './src/Details';
import OnBord from './src/OnBord';
import ManHairCut from './src/AllServices/Salon/ManHairCut';
import WomanHairCut from './src/AllServices/Salon/WomanHairCut';
import Plumber from './src/AllServices/Plumber & Carpenter/Plumber';
import Maintenance from './src/AllServices/Maintenance';
import Spa from './src/AllServices/Salon/Spa';
import Massage from './src/AllServices/Massage/Massage';
import AllServices from './src/AllServices/AllServices';
import BookingScreen from './src/BookingScreen';
import ProfileScreen from './src/ProfileScreen';
import WishlistScreen from './src/WishlistScreen';
import SignOutScreen from './src/SignOutScreen';


const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='OnBord' component={OnBord}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='ManHairCut' component={ManHairCut}/>
        <Stack.Screen name='WomanHairCut' component={WomanHairCut}/>
        <Stack.Screen name='Plumber' component={Plumber}/>
        <Stack.Screen name='Maintenance' component={Maintenance}/>
        <Stack.Screen name='Spa' component={Spa}/>
        <Stack.Screen name='Massage' component={Massage}/>
        <Stack.Screen name='AllServices' component={AllServices}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='BookingScreen' component={BookingScreen}/>
        <Stack.Screen name='WishlistScreen' component={WishlistScreen}/>
        <Stack.Screen name='SignOutScreen' component={SignOutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;