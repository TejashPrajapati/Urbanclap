import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const SearchFilter = ({data,input,setInput}) => {
  return (
    <View style = {{marginTop: 10, marginLeft: 10}}>
      <FlatList  data={data} renderItem={({item}) => {
        if(input === ""){
          return (
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:14,fontWeight:"bold"}}>{item.name}</Text>
                <Text style={{borderColor:"grey",borderWidth:1, height:1,marginTop:5}} />
            </View>
          )
        }

        if(item.name.toLowerCase().includes(input.toLowerCase())){
          return (
            <View style={{marginVertical:10}}>
              <Text style={{fontSize:14,fontWeight:"bold"}}>{item.name}</Text>
              <Text style={{borderColor:"grey",borderWidth:1, height:1,marginTop:5}} />
            </View>
          )
        }
      }}/>
    </View>
  )
}

export default SearchFilter 