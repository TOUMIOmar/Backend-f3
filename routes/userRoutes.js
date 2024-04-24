const express=require('express')
const router=express.Router()
const userMiddleware=require('../middleware/userMiddleware')
const {GetDone,Register,Login,getUserData} =require('../controllers/userControllers')

router.get("/",GetDone)
router.post('/register',Register)
router.post('/login',Login)
router.get('/userdata',userMiddleware,getUserData)




module.exports=router