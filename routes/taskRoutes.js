const express=require('express')
const router=express.Router()
const userMiddleware=require('../middleware/userMiddleware')
const {CreateTask,DeleteTask,GetTasks,UpdateTask}=require('../controllers/taskControllers')

router.post("/post",userMiddleware,CreateTask)
router.delete("/delete/:id",userMiddleware,DeleteTask)
router.get("/get",userMiddleware,GetTasks)
router.put("/put/:x",userMiddleware,UpdateTask)







module.exports=router