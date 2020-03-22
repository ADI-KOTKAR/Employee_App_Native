import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper'


const Home = ()=>{

    const data =[
        {
            id:1,
            name:"Aditya",
            position:"Web Developer",
        },
        {
            id:2,
            name:"Atharva",
            position:"Gamer"
        },
        {
            id:3,
            name:"Vilas",
            position:"Senior Analyst"
        },
        {
            id:4,
            name:"Vaibhavi",
            position:"Teacher"
        },
        {
            id:5,
            name:"Ayush",
            position:"Painter"
        },
        {
            id:6,
            name:"Bobby",
            position:"Motorist"
        },
        {
            id:7,
            name:"Vellar",
            position:"Engineer"
        },
        {
            id:8,
            name:"Hamilton",
            position:"Doctor"
        },
        {
            id:9,
            name:"Dev",
            position:"Priest"
        },
        {
            id:10,
            name:"Akash",
            position:"Sky Diver"
        },
    ]

    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardView}>
                    <Image 
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}}
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
        <View>
            <FlatList 
                data = {data}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                keyExtractor={item=>`${item.id}`}
            />
            <FAB
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
                onPress={() => console.log('Pressed')}
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