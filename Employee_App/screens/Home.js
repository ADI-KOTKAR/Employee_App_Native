import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import {Card, FAB} from 'react-native-paper'


const Home = ({ navigation: { navigate } })=>{

    //fetching data in home
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchData = ()=>{
        fetch("https://09993bd4.ngrok.io/")
        .then(res=>res.json())
        .then(results=>{
            setData(results)
            //console.log(results)
            setLoading(false)
        }).catch(err=>{
            Alert.alert("Something went wrong..")
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderList = ((item)=>{
        return(
            <Card 
                style={styles.mycard}
                key={item._id}
                onPress={()=>navigate("Profile",{item})}    
            >
                <View style={styles.cardView}>
                    <Image 
                    style={{width:60,height:60,borderRadius:30}}
                    source={{uri:item.picture}}
                     />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text2}>{item.name}</Text>
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
                keyExtractor={item=>`${item._id}`}
                onRefresh={()=>fetchData()}
                refreshing={loading}
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
        fontSize:17,
    },
    text2:{
        fontSize:19,
        fontWeight:"bold"
    },
    fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Home




/*
const data =[
        {
            _id:1,
            name:"Aditya",
            email:"adityakotkar75@gmail.com",
            salary:"10 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Web Developer",
        },
        {
            _id:2,
            email:"2018.aditya.kotkar@ves.ac.in",
            salary:"9 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name:"Atharva",
            position:"Gamer"
        },
        {
            _id:3,
            email:"goplooanurag@gmail.com",
            salary:"5 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            name:"Vilas",
            position:"Senior Analyst"
        },
        {
            _id:4,
            name:"Vaibhavi",
            email:"atharvakotkar@rediffmail.com",
            salary:"15 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Teacher"
        },
        {
            _id:5,
            name:"Ayush",
            email:"atharvakotkar75@rediffmail.com",
            salary:"20 LPA",
            phone:"8928190722",
            picture:"https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&ix_id=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            position:"Painter"
        }
    ]
*/