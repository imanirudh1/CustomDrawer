import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ProfileScreen,ActivityScreen,MessageScreen,SignoutScreen,StatisticScreen,ReportScreen,ListScreen} from '../screen/HomeScreen'
//import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground, Image,Text,View,ScrollView,StyleSheet } from 'react-native';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
// const Nav=createStackNavigator(
//     { 
//         ProfileScreen,
//         MessageScreen,
//         ActivityScreen,
//         ListScreen,
//         ReportScreen,
//         SignoutScreen,
//         StatisticScreen
         
//     },{
//         initialRouteName:ProfileScreen,
//         defaultNavigationOptions:{
//             headerStyle:{
//                 backgroundColor:'black'
//             },
//              //headerTintColor:'White'
//         }
//     }

// )
const SideBar=props => {
    return(
        <ScrollView>
            <ImageBackground style={{width:undefined,padding:16,paddingTop:48}} source={require('../assets/bg.jpg')} >
                <Image source={require('../assets/ab.jpg')} style={styles.profile} />
                <Text style={{fontSize:20,color:'white',fontWeight:'700',marginVertical:8}}>
                    Anirudh Banerjee
                </Text>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color:'rgba(255,255,255,0.8)',fontSize:13,marginRight:4}}>135 Followers</Text>
               <Ionicons name='md-people' size={16} color='rgba(255,255,255,0.8)' />
               </View> 
            </ImageBackground>
            <DrawerNavigatorItems {...props} />
        </ScrollView>
    )
}
const CustomDrawer=createDrawerNavigator({
    Profile:{screen:ProfileScreen,
        navigationOptions:{
            title:'Profile',
            color:'white',
            drawerIcon:<Ionicons name='ios-contact' size={16} color='#17449C' />
        }
    },
    Message:{screen:MessageScreen,
        navigationOptions:{
            title:'Message',
            color:'white',
            drawerIcon:<Ionicons name='md-text' size={16} color='#17449C' />
        }
    },
    Activity:{screen:ActivityScreen,
        navigationOptions:{
            title:'Activity',
            
            drawerIcon:<Ionicons name='ios-barcode' size={16} color='#17449C' />
        }
    },
    Report:{screen:ReportScreen,
        navigationOptions:{
            title:'Report',
            
            drawerIcon:() => <Ionicons name='ios-warning' size={23} color='#17449C' />
        }
    },
    List:{screen:ListScreen,
        navigationOptions:{
            title:'List',
            
            drawerIcon:<Ionicons name='ios-list' size={16} color='#17449C' />
        }
    },
    Statistic:{screen:StatisticScreen,
        navigationOptions:{
            title:'Statistic',
            
            drawerIcon:<Ionicons name='ios-stats' size={16} color='#17449C' />
        }
    },
    Signout:{screen:SignoutScreen,
        navigationOptions:{
            title:'Signout',
            
            drawerIcon:<Ionicons name='ios-log-out' size={16} color='#17449C' />
        }
    },

    

},{  contentComponent:SideBar,
        
        contentOptions:{
            activeBackgroundColor:'rgba(0,0,255,0.1)',
            activeTintColor:'#17449C',
            itemStyle:{
                borderRadius:15,
            },
            itemsContainerStyle:{
                marginTop:16,
                marginHorizontal:8
            }
        },
        
    
});
const styles=StyleSheet.create({
    profile:{
        height:80,
        width:80,
        borderRadius:40

    }
})
export default createAppContainer(CustomDrawer);