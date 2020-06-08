import React from 'react'

import { Text, View,StyleSheet,TouchableOpacity,SafeAreaView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
const Screen=props => {
    return(<View style={styles.container}>
        <SafeAreaView>
                <TouchableOpacity onPress={() =>
                    props.navigation.openDrawer()
                } style={styles.ham} >
                    <Ionicons name='ios-menu' color='black' size={35}  />
                </TouchableOpacity></SafeAreaView>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <Text style={{fontSize:23,fontWeight:"bold"}}>
                {props.name} Screen
            </Text>
        </View></View>
    )
}
    
const styles=StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:'center'
    },ham:{
        margin:20,
        marginTop:40

    }
})
export default Screen;
