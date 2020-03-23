const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())

//Mongo connection
/*-----------------------------------------*/
const Employee = mongoose.model("employee")

const mongoUri = "mongodb+srv://cnq:IURUeN9UGmZzunc8@cluster0-q1e7o.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,

})

mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongo");
    
})

mongoose.connection.on("error",(err)=>{
    console.log("Error!!",err);
    
})
/*----------------------------------------*/

//Get Route
app.get('/',(req,res)=>{
    Employee.find({}).then(data=>{
        console.log(data);
        res.send(data)
    }).catch(err=>{
        console.log(data);
    })
    //res.send("Welcome To Node JS")
})

//Post Route
/*------------------------------------ */

//create route
app.post('/send-data',(req,res)=>{
    const employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        position:req.body.position,
        picture:req.body.picture
    })
    employee.save()
    .then(data=>{
        console.log(data);
        res.send(data)
    }).catch(err=>{
        console.log(err);
    })
})
//delete route
app.post('/delete-data',(req,res)=>{
    //used 'deleteOne' instead of 'findByIdAndRemove' --wrong comment
    Employee.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data);
        res.send(data)
    })
    .catch(err=>{
        console.log(err);
    })
})
//update route
app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        position:req.body.position,
        picture:req.body.picture
    }).then(data=>{
        console.log(data);
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

/*------------------------------------*/


//Server code
app.listen(3000,()=>{
    console.log("server running");
    
})






/*
        {"name":"Aditya",
        "email":"abc@abc.com",
        "phone":"12345",
        "salary":"10 LPA",
        "position":"Web Dev",
        "picture":"some url"} 

 */