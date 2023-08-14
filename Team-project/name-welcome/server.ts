\import express from "express";
import { uuid } from "uuidv4";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import {Schema, model} from "mongoose"


dotenv.config()

const uri: string|undefined =process.env.MONGOOSE_URI + "datatest"

if(uri){
    mongoose.connect(uri)
    .then(()=>console.log("we are have mongoosee"))
    .catch((err)=>console.log("no mongoose",err))
}else{ 
    console.log("no uri")
} 
const app = express()

app.use(express.json())
const UserSchema = new Schema(
    {name:String,src:String}
 ) 
const UserModel = mongoose.model("users",UserSchema)  


  



app.use(express.static(__dirname + "/public"))
class User {
    public uid:string= uuid()
    constructor(public name:string,public src:string){}
    getSimpelUser(){
        return {name:this.name,src:this.src,uid:this.uid}
    }
}



app.use(express.static("./public"))

app.get("/api/user-get",async (req:any,res:any)=>{
    try {
        const users = await UserModel.find({})  
        res.send({users})
    } catch (error) {
        console.log(error)
    }
})

app.post("/api/add-user",async (req:any,res:any)=>{
    try {
        const {name ,src} = req.body

        const usersdb = await UserModel.create({name,src})
        res.status(200).send({ok:true})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

app.patch("/api/update-user",async (req,res)=>{
    try {
        const {name ,uid} = req.body
        if(!name) throw new Error("no name in date");
        if(!uid) throw new Error("no uid in date");

        const userdb = await UserModel.findByIdAndUpdate(uid, { name}) 
        res.status(200).send({ok:true})

    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

app.delete("/api/Delete-user",async(req,res)=>{
    try {
        const { uid } =req.body
        if(!uid)throw new Error("no uid for user ");

        await UserModel.findByIdAndDelete(uid)
           
        res.send({message: "User deleted"})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.listen(3000,()=>{
    console.log("server listen 3000")
})