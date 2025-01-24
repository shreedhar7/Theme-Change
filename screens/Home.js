import { StyleSheet, Text, View , Switch} from 'react-native'
import React ,{useContext, useState} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

const Home = () => {
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => setDarkMode(previousState => !previousState);
  return (
    <View style={[styles.container , {backgroundColor:theme.backgroundColor}]}>
      <Text style={[styles.text , {color:theme.color}]}>Home</Text>
      <Switch 
      value={darkMode}
       onValueChange={(value) => {
        setDarkMode(value);
        EventRegister.emit('ChangeTheme' , value)      
       }}
      />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 30,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        fontSize : 30
    }
})