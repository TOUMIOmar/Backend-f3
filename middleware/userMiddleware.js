const jwt=require('jsonwebtoken')
const userMiddleware=async(req,res,next)=>{

    try {
        const token=req.headers.token
        if(!token){
            res.status(400).json({msg:"you are not authorized!"})
        }
        else{
            const VeriyToken=await jwt.verify(token,process.env.JWT_KEY)
            console.log(VeriyToken)
            if(!VeriyToken){
                res.status(400).json({msg:"you are not authorized!"})
            }
            else{
                req.body.userId=VeriyToken.id
                next()
            }
        }
    } catch (error) {
        res.status(500).json({msg:"Something went wrong",error})
    }

}

module.exports=userMiddleware