import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../theme/themeContext'

const Profile = () => {
    const theme = useContext(themeContext);
  return (
    <View style={[styles.container , {backgroundColor:theme.backgroundColor}]}>
          <Text style={[styles.text , {color:theme.color}]}>Profile</Text>
        
    </View>
  )
}

export default Profile;

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