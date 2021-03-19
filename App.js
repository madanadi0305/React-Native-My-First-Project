import React,{useState} from 'react';

import {Text,StyleSheet,View,TouchableOpacity,StatusBar} from 'react-native';
const App=()=>{
const [randomColor,setRandomColor]=useState("rgb(32,0,126)") ; 
const changeBackgroundColor=()=>{
  const bgcolor="rgb(" +
  Math.floor(Math.random()*256)+
  ","+
  Math.floor(Math.random()*256)+
  ","+
  Math.floor(Math.random()*256)+
  ")";
  setRandomColor(bgcolor);
};

const changeToBlack=()=>{
  const resetColor="rgb(0,0,0)";
setRandomColor(resetColor);
};
return(
  <>
  <StatusBar backgroundColor={randomColor}/>
  <View style={[styles.container,{backgroundColor:randomColor}]}>
  <TouchableOpacity onPress={changeBackgroundColor}>
  <Text style={styles.text}>
    Tap Me
  </Text>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={changeToBlack} 
  style={{marginVertical:50}} >
  <Text style={styles.text}>Reset</Text>
  </TouchableOpacity>
  </View>
  </>

);

};
export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
  textTransform:"uppercase",
  
  }
});