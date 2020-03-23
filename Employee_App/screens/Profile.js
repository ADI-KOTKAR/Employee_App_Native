import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Title, Card, Button} from 'react-native-paper';
import {MaterialIcons} from '@expo/vector-icons'



const Profile = (props)=>{

    const {_id,name,picture,phone,email,salary,position} = props.route.params.item
    console.log(_id, name)
    const openDial=()=>{
        if(Platform.OS === "android"){
            Linking.openURL(`tel:${phone}`)
        }
        else{
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    const deleteEmployee = ()=>{
        fetch("https://09993bd4.ngrok.io/delete-data",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:_id
            })
        }).then(res=>res.json())
        .then(deletedEmp=>{
            Alert.alert(`${deletedEmp.name}'s profile is deleted.`)
            console.log(`${deletedEmp.name} deleted`)
            props.navigation.navigate("Home")
        }).catch(err=>{
            Alert.alert("Something went wrong..")
        })
    }
    return(
        <View style={styles.root}>
            <LinearGradient 
                colors={["#006aff","#6bc1ff"]}
                style={{height:"20%"}}
            />
                
            <View style={{alignItems:"center"}}>
                <Image
                style={{width:140,height:140,borderRadius:70,marginTop:-50}}
                source={{uri:picture}}
                />
            </View>
            <View style={{alignItems:"center",margin:15}}>
                <Title>{name}</Title>
                <Text style={styles.mytext}>{position}</Text>
            </View>
            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL(`mailto:${email}`)
            }}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={()=>{
                openDial()
            }}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardcontent}>
                    <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{salary}</Text>
                </View>
            </Card>
            <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
                <Button  
                        theme={theme} 
                        icon="account-edit" 
                        mode="contained" 
                        onPress={()=> {
                            props.navigation.navigate("Create",
                            {_id,name,picture,phone,email,salary,position}
                            )
                        }}>
                            Edit
                </Button>
                <Button  
                        theme={theme} 
                        icon="delete" 
                        mode="contained" 
                        onPress={()=> deleteEmployee()}>
                            Fire Employee
                </Button>
            </View>
        </View>
    )
}
const theme  = {
    colors:{
        primary:"#006aff"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        
    },
    mycard:{
        margin:3
    },
    cardcontent:{
        flexDirection:"row",
        padding:8,
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5,
    }
})

export default Profile