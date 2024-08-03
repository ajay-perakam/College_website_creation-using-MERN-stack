const express= require('express')
const cors=require('cors')
const {MongoClient}=require('mongodb')
const bcrypt=require('bcrypt')

const app=new express();
app.use(express.json());
app.use(cors());

const client=new MongoClient('mongodb+srv://admin:admin@cluster0.6nxrs25.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
client.connect();
const db=client.db('MITS');
const col=db.collection('AI');



app.post('/insert',async(req,res)=>{
    console.log(req.body)
    req.body.password=await bcrypt.hash(req.body.password,5)
    col.insertOne(req.body)
    res.send("successfully recieved")
})

app.post('/check',async(req,res)=>{
    const result=await col.findOne({'firstname':req.body.un})
    if(await bcrypt.compare(req.body.pw,result.password)){
        res.send("Login successful")
    }
    else{
        res.send("Login Failed")
    }
})

app.get('/showall',async (req,res)=>{
    const result = await col.find().toArray();
    res.send(result)
})

app.post('/delete',async(req,res)=>{
    const result=await col.findOne({'firstname':req.body.un})
    if(result.firstname==req.body.un){
        col.deleteOne({firstname:result.firstname})
        res.send("Delete successfully")
    }
    else{
        res.send("Deletion Failed")
    }
})


app.post('/update',async(req,res)=>{
    const result=await col.findOne({'firstname':req.body.un})

    if(result.firstname==req.body.un){
        if(await bcrypt.compare(req.body.pw,result.password)){
            req.body.pwd=await bcrypt.hash(req.body.pwd,5);
            col.updateOne({password:result.password},{$set:{password:req.body.pwd}})
            res.send("Updated successfully")
        }
    else{
        res.send("update failed")
    }
        
    }
    else{
        res.send("Deletion Failed")
    }
})
const port=8081;
app.listen(port);
console.log(`server is running with ${port}`)

