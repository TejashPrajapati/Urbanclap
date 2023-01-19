import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pt.jpg'
import logo from '../../assets/PM1.png'
import { button1 } from '../common/button'
import { button2 } from '../common/button'
import { head1 } from '../common/formcss'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={logo} />
          <Text></Text>
          <Text></Text>
        </View>
        <View style={styles.s2}>
        <Text style={head1}>Login</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  patternbg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  container1:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  s1:{
    color: '#fff',
    fontSize: 17,
  },
  s2:{
    display: 'flex',
    backgroundColor:'#fff',
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
})