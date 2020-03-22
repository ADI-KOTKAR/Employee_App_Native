import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'


const Home = ({ navigation: { navigate } })=>{

    const data =[
        {
            id:1,
            name:"Aditya",
            email:"adityakotkar75@gmail.com",
            salary:"10 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Web Developer",
        },
        {
            id:2,
            email:"2018.aditya.kotkar@ves.ac.in",
            salary:"9 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name:"Atharva",
            position:"Gamer"
        },
        {
            id:3,
            email:"goplooanurag@gmail.com",
            salary:"5 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name:"Vilas",
            position:"Senior Analyst"
        },
        {
            id:4,
            name:"Vaibhavi",
            email:"atharvakotkar@rediffmail.com",
            salary:"15 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Teacher"
        },
        {
            id:5,
            name:"Ayush",
            email:"atharvakotkar75@rediffmail.com",
            salary:"20 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Painter"
        },
        // {
        //     id:6,
        //     name:"Bobby",
        //     position:"Motorist"
        // },
        // {
        //     id:7,
        //     name:"Vellar",
        //     position:"Engineer"
        // },
        // {
        //     id:8,
        //     name:"Hamilton",
        //     position:"Doctor"
        // },
        // {
        //     id:9,
        //     name:"Dev",
        //     position:"Priest"
        // },
        // {
        //     id:10,
        //     name:"Akash",
        //     position:"Sky Diver"
        // },
    ]

    const renderList = ((item)=>{
        return(
            <Card 
                style={styles.mycard}
                key={item.id}
                onPress={()=>navigate("Profile",{item})}    
            >
                <View style={styles.cardView}>
                    <Image 
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:item.picture}}
                     />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                    

                </View>
            </Card>
        )
    })

    return(
        <View style={{flex:1}}>
            <FlatList 
                data = {data}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                keyExtractor={item=>`${item.id}`}
            />
            <FAB
                onPress={()=>navigate("Create")}
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
                //onPress={() => console.log('Pressed')}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
        padding:5,
        flexDirection:"row"
    },
    cardView:{
        flexDirection:"row",
        padding:6
    },
    text:{
        fontSize:18
    },
    fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Home