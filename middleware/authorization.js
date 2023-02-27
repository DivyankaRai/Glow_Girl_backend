exports.authorization = (...roles) => {
    return (req,res,next) => {

        if(!roles.includes(req.user.role)){
            
            res.status(403).json(`Role: ${req.user.role} is not allowed to access`)
        }

        next()

    }
}