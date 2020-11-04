const Contact=require('./contactModal');


exports.postContact=async(req,res,next)=>{
    console.log(req.body)
    const name=req.body.user.name;
    const email=req.body.user.email;
    const message=req.body.user.message;

    const contact=new Contact({
        name:name,
        email:email,
        message:message
    })

    try{
        const result=contact.save();
        res.send({
            message:'Your Response is send successfully'
        })
    }
    catch(err){
        console.log(result);
    }
}