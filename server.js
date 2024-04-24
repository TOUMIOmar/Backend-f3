const express=require("express")
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
app.use(cors())

dotenv.config({path:"./config/.env"})
const connectDB=require("./config/connectDB")
port=process.env.PORT || 5000
app.use(express.json())

connectDB()


app.use('/api',require('./routes/userRoutes'))
app.use('/api/task',require('./routes/taskRoutes'))
app.listen(port,(err)=>{
    err? console.log("error:",err):console.log("Server isRunning in port :",port)
})